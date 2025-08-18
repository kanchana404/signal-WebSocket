const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const http = require('http');

// Bot token from env (recommended) with fallback to inline token
const token = process.env.TELEGRAM_BOT_TOKEN || '7532591131:AAGENf7Loz-y1caswqe5ULdml07ZLvuByhA';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Ensure images directory exists
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('🤖 Telegram Bot is starting...');
console.log('📡 Listening for TRADING SIGNALS in all groups and channels...');
console.log('⚠️  Make sure the bot is added as an admin to the groups/channels you want to monitor');
console.log('');

// WebSocket server
const WS_PORT = Number(process.env.WS_PORT || 8080);
const wss = new WebSocket.Server({ port: WS_PORT });

function broadcast(type, data) {
  const payload = JSON.stringify({ type, data, ts: Date.now() });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

wss.on('connection', (socket, req) => {
  const ip = (req && req.socket && req.socket.remoteAddress) ? req.socket.remoteAddress : 'unknown-ip';
  const ua = (req && req.headers && req.headers['user-agent']) ? req.headers['user-agent'] : 'unknown-ua';
  console.log(`🔌 WS client connected from ${ip} (UA: ${ua}). Active clients: ${wss.clients.size}`);
  socket.send(JSON.stringify({ type: 'ready', data: { message: 'connected' }, ts: Date.now() }));

  socket.on('close', (code) => {
    console.log(`👋 WS client disconnected (${ip}), code=${code}. Active clients: ${wss.clients.size}`);
  });
  socket.on('error', (err) => {
    console.warn(`⚠️ WS client error (${ip}):`, err && err.message ? err.message : err);
  });
});

console.log(`🔌 WebSocket server listening on ws://localhost:${WS_PORT}`);

// Simple HTTP static server for images
const HTTP_PORT = Number(process.env.HTTP_PORT || 8081);
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL || `http://localhost:${HTTP_PORT}`;

function getMimeTypeByExt(ext) {
  switch ((ext || '').toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.webp':
      return 'image/webp';
    case '.bmp':
      return 'image/bmp';
    case '.tif':
    case '.tiff':
      return 'image/tiff';
    default:
      return 'application/octet-stream';
  }
}

function toPublicUrl(localPath) {
  const filename = path.basename(localPath);
  return `${PUBLIC_BASE_URL}/images/${encodeURIComponent(filename)}`;
}

const httpServer = http.createServer((req, res) => {
  try {
    if (!req.url) {
      res.statusCode = 400;
      return res.end('Bad Request');
    }
    const url = new URL(req.url, `http://localhost:${HTTP_PORT}`);
    if (url.pathname.startsWith('/images/')) {
      const fileSegment = url.pathname.replace('/images/', '');
      const filename = path.basename(decodeURIComponent(fileSegment));
      const filePath = path.join(imagesDir, filename);
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        return res.end('Not Found');
      }
      const ext = path.extname(filePath);
      res.setHeader('Content-Type', getMimeTypeByExt(ext));
      const stream = fs.createReadStream(filePath);
      stream.on('error', () => {
        res.statusCode = 500;
        res.end('Error');
      });
      return stream.pipe(res);
    }
    res.statusCode = 404;
    res.end('Not Found');
  } catch (err) {
    res.statusCode = 500;
    res.end('Server Error');
  }
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`🌐 HTTP server serving images at ${PUBLIC_BASE_URL}/images/<filename>`);
});

// Function to check if message is a trading signal
function isTradingSignal(text) {
  if (!text) return false;
  
  const upperText = text.toUpperCase();
  
  const hasSignalKeywords = (
    upperText.includes('BUY NOW') || 
    upperText.includes('SELL NOW') ||
    upperText.includes('BUY') ||
    upperText.includes('SELL')
  );
  
  const hasTradingStructure = (
    upperText.includes('ENTRY ZONE') ||
    upperText.includes('TP') ||
    upperText.includes('STOPLOSS') ||
    upperText.includes('STOP LOSS')
  );
  
  const hasCurrency = (
    upperText.includes('GOLD') ||
    upperText.includes('SILVER') ||
    upperText.includes('EURUSD') ||
    upperText.includes('GBPUSD') ||
    upperText.includes('USDJPY') ||
    upperText.includes('BTC') ||
    upperText.includes('ETH') ||
    upperText.includes('CRYPTO') ||
    upperText.includes('FOREX') ||
    upperText.includes('OIL') ||
    upperText.includes('NASDAQ') ||
    upperText.includes('DOW') ||
    upperText.includes('SP500')
  );
  
  const hasPriceLevels = /\d+(?:\.\d+)?/.test(text);
  
  const criteria = [hasSignalKeywords, hasTradingStructure, hasCurrency, hasPriceLevels];
  const matchCount = criteria.filter(Boolean).length;
  
  return matchCount >= 3;
}

// Function to extract trading signal details
function extractSignalDetails(text) {
  const signal = {
    currency: '',
    action: '',
    entryZone: '',
    tp1: '',
    tp2: '',
    stoploss: '',
    source: ''
  };
  
  const upperText = text.toUpperCase();
  
  const currencyMatch = text.match(/(GOLD|SILVER|EURUSD|GBPUSD|USDJPY|BTC|ETH|CRYPTO|FOREX|OIL|NASDAQ|DOW|SP500)/i);
  if (currencyMatch) {
    signal.currency = currencyMatch[1];
  }
  
  if (upperText.includes('BUY NOW') || upperText.includes('BUY')) {
    signal.action = 'BUY';
  } else if (upperText.includes('SELL NOW') || upperText.includes('SELL')) {
    signal.action = 'SELL';
  }
  
  const entryMatch = text.match(/Entry Zone\s*:\s*(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/i);
  if (entryMatch) {
    signal.entryZone = `${entryMatch[1]} - ${entryMatch[2]}`;
  }
  
  const tp1Match = text.match(/TP\s*1\s*:\s*(\d+\.?\d*)/i);
  if (tp1Match) {
    signal.tp1 = tp1Match[1];
  }
  
  const tp2Match = text.match(/TP\s*2\s*:\s*(\d+\.?\d*)/i);
  if (tp2Match) {
    signal.tp2 = tp2Match[1];
  }
  
  const stoplossMatch = text.match(/Stop\s*loss|Stoploss\s*:\s*(\d+\.?\d*)/i);
  if (stoplossMatch) {
    // If regex grouped differently, pick last numeric part
    const nums = stoplossMatch[0].match(/\d+\.?\d*/g);
    if (nums && nums.length) {
      signal.stoploss = nums[nums.length - 1];
    }
  }
  
  const linkMatch = text.match(/https:\/\/t\.me\/\w+/);
  if (linkMatch) {
    signal.source = linkMatch[0];
  }
  
  return signal;
}

function buildSafeFilename(baseId, extHint) {
  const raw = String(baseId || '').trim();
  const sanitized = raw.replace(/[^a-zA-Z0-9_-]/g, '_');
  const limited = sanitized.length > 80 ? sanitized.slice(0, 80) : sanitized;
  let ext = extHint || '.jpg';
  if (ext && !ext.startsWith('.')) ext = `.${ext}`;
  return `${limited}${ext}`;
}

// Download by file_id using getFileLink and name the file using file_unique_id (fallback: file_id)
async function downloadByFileId(fileId, fileUniqueId) {
  try {
    const link = await bot.getFileLink(fileId);
    const urlObj = new URL(link);
    let ext = path.extname(urlObj.pathname);

    // Fetch to get data and possibly infer extension from content-type
    const res = await fetch(link);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (!ext) {
      const ct = (res.headers.get('content-type') || '').toLowerCase();
      if (ct.includes('jpeg') || ct.includes('jpg')) ext = '.jpg';
      else if (ct.includes('png')) ext = '.png';
      else if (ct.includes('gif')) ext = '.gif';
      else if (ct.includes('webp')) ext = '.webp';
      else if (ct.includes('bmp')) ext = '.bmp';
      else if (ct.includes('tif')) ext = '.tiff';
      else ext = '.jpg';
    }

    let filename = buildSafeFilename(fileUniqueId || fileId, ext);
    // Ensure target directory exists just before writing
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    let fullPath = path.join(imagesDir, filename);
    // Avoid overwrite if somehow same id appears again
    if (fs.existsSync(fullPath)) {
      const ts = Date.now();
      const baseName = (fileUniqueId || fileId).toString().replace(/[^a-zA-Z0-9_-]/g, '_');
      const limited = baseName.length > 70 ? baseName.slice(0, 70) : baseName;
      filename = `${limited}_${ts}${ext}`;
      fullPath = path.join(imagesDir, filename);
    }

    const arrayBuffer = await res.arrayBuffer();
    try {
      fs.writeFileSync(fullPath, Buffer.from(arrayBuffer));
      return fullPath;
    } catch (writeErr) {
      // Fallback to SDK download then rename
      console.warn('⚠️ Direct write failed, falling back to SDK download:', writeErr.message || writeErr);
      const tempPath = await bot.downloadFile(fileId, imagesDir);
      const tempExt = path.extname(tempPath) || ext || '.jpg';
      filename = buildSafeFilename(fileUniqueId || fileId, tempExt);
      fullPath = path.join(imagesDir, filename);
      if (!fs.existsSync(path.dirname(fullPath))) {
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      }
      try {
        fs.renameSync(tempPath, fullPath);
      } catch {
        // If rename across dirs fails, copy then unlink
        fs.copyFileSync(tempPath, fullPath);
        try { fs.unlinkSync(tempPath); } catch {}
      }
      return fullPath;
    }
  } catch (err) {
    console.error('⚠️ Download by file_id failed:', err.message || err);
    return null;
  }
}

// Download photos/documents (images) attached to a message
async function downloadImagesFromMessage(msg) {
  const savedPaths = [];

  // Photos (array of sizes) - take the highest resolution (last)
  if (Array.isArray(msg.photo) && msg.photo.length > 0) {
    const largestPhoto = msg.photo[msg.photo.length - 1];
    console.log(`🖼️ Photo detected. Sizes: ${msg.photo.length}. Using file_id: ${largestPhoto.file_id}`);
    const localPath = await downloadByFileId(largestPhoto.file_id, largestPhoto.file_unique_id);
    if (localPath) savedPaths.push(localPath);
  }

  // Documents that are images
  if (msg.document && msg.document.file_id) {
    const mime = msg.document.mime_type || '';
    const isImageDoc = mime.startsWith('image/');
    const hasImageExt = /\.(png|jpe?g|gif|webp|bmp|tiff?)$/i.test(msg.document.file_name || '');
    if (isImageDoc || hasImageExt) {
      console.log(`🖼️ Image document detected. file_id: ${msg.document.file_id} name: ${msg.document.file_name || ''}`);
      const localPath = await downloadByFileId(msg.document.file_id, msg.document.file_unique_id);
      if (localPath) savedPaths.push(localPath);
    }
  }

  return savedPaths;
}

function getMessageTextOrCaption(msg) {
  return msg.text || msg.caption || '';
}

function isForwarded(msg) {
  return Boolean(msg.forward_from || msg.forward_from_chat || msg.forward_sender_name);
}

function hasImage(msg) {
  const hasPhoto = Array.isArray(msg.photo) && msg.photo.length > 0;
  const hasImageDoc = !!(msg.document && ((msg.document.mime_type || '').startsWith('image/') || /\.(png|jpe?g|gif|webp|bmp|tiff?)$/i.test(msg.document.file_name || '')));
  return hasPhoto || hasImageDoc;
}

// Listen for all messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const chatType = msg.chat.type;
  const chatTitle = msg.chat.title || msg.chat.username || 'Private Chat';
  const userId = msg.from.id;
  const username = msg.from.username || 'No username';
  const firstName = msg.from.first_name || '';
  const lastName = msg.from.last_name || '';
  const textOrCaption = getMessageTextOrCaption(msg) || '[No text content]';
  const messageId = msg.message_id;
  const date = new Date(msg.date * 1000).toLocaleString();

  const imagePresent = hasImage(msg);
  const isSignal = isTradingSignal(textOrCaption);

  // If it's a signal, prepare images (if any) but don't print a separate image block
  let savedPaths = [];
  if (isSignal && imagePresent) {
    savedPaths = await downloadImagesFromMessage(msg);
  }

  // Signal path: single consolidated output (includes images if any)
  if (isSignal) {
    const signalDetails = extractSignalDetails(textOrCaption);

    console.log('🚨 TRADING SIGNAL DETECTED! 🚨');
    console.log('─'.repeat(60));
    console.log(`📊 Currency/Asset: ${signalDetails.currency}`);
    console.log(`📈 Action: ${signalDetails.action}`);
    console.log(`🎯 Entry Zone: ${signalDetails.entryZone}`);
    console.log(`💰 TP 1: ${signalDetails.tp1}`);
    console.log(`💰 TP 2: ${signalDetails.tp2}`);
    console.log(`🛑 Stop Loss: ${signalDetails.stoploss}`);
    if (signalDetails.source) {
      console.log(`🔗 Source: ${signalDetails.source}`);
    }

    // Images were already downloaded above if present
    if (savedPaths.length > 0) {
      const imageUrls = savedPaths.map((p) => toPublicUrl(p));
      console.log('🖼️ Image URLs:');
      imageUrls.forEach((u) => console.log(`   - ${u}`));
    }
    broadcast('signal_detected', {
      signal: signalDetails,
      chatId,
      chatType,
      chatTitle,
      user: { id: userId, username, firstName, lastName },
      messageId,
      date,
      images: savedPaths,
      imageUrls: savedPaths.map((p) => toPublicUrl(p))
    });

    console.log('─'.repeat(60));
    console.log(`📨 Chat: ${chatTitle} (${chatType})`);
    console.log(`👤 User: @${username} (${firstName} ${lastName})`);
    console.log(`🕐 Time: ${date}`);
    console.log(`📝 Message ID: ${messageId}`);
    console.log('─'.repeat(60));
    console.log(`📄 Full Message:`);
    console.log(textOrCaption);
    console.log('─'.repeat(60));
    console.log('');
  } else {
    // Non-signal path: if only an image was sent, log it once and broadcast image_saved
    if (imagePresent) {
      console.log('📥 Image detected. Downloading...');
      const imgPaths = await downloadImagesFromMessage(msg);
      if (imgPaths.length > 0) {
        console.log('🖼️ Saved Images:');
        const urls = imgPaths.map((p) => toPublicUrl(p));
        urls.forEach((u) => console.log(`   - ${u}`));
        console.log('─'.repeat(60));
        broadcast('image_saved', {
          paths: imgPaths,
          urls,
          chatId,
          chatType,
          chatTitle,
          user: { id: userId, username, firstName, lastName },
          messageId,
          date,
          caption: textOrCaption
        });
      } else {
        console.log('⚠️ Image detected but could not be saved (check logs above).');
      }
    }
  }
});

// Listen for edited messages (check if they become trading signals)
bot.on('edited_message', async (msg) => {
  const textOrCaption = getMessageTextOrCaption(msg) || '[No text content]';
  const imagePresent = hasImage(msg);

  // Always save images when present
  let savedPaths = [];
  if (imagePresent) {
    console.log('📥 Image detected in edited message. Downloading...');
    savedPaths = await downloadImagesFromMessage(msg);
    if (savedPaths.length > 0) {
      console.log('🖼️ Saved Images:');
      const urls = savedPaths.map((p) => toPublicUrl(p));
      urls.forEach((u) => console.log(`   - ${u}`));
      console.log('─'.repeat(60));
      const chatTitle = msg.chat.title || msg.chat.username || 'Private Chat';
      const username = msg.from.username || 'No username';
      broadcast('image_saved', {
        paths: savedPaths,
        urls,
        chatId: msg.chat.id,
        chatType: msg.chat.type,
        chatTitle,
        user: { id: msg.from.id, username, firstName: msg.from.first_name || '', lastName: msg.from.last_name || '' },
        messageId: msg.message_id,
        date: new Date((msg.edit_date || msg.date) * 1000).toLocaleString(),
        caption: textOrCaption,
        edited: true
      });
    }
  }

  if (isTradingSignal(textOrCaption)) {
    const signalDetails = extractSignalDetails(textOrCaption);
    const chatTitle = msg.chat.title || msg.chat.username || 'Private Chat';
    const username = msg.from.username || 'No username';
    const editDate = new Date(msg.edit_date * 1000).toLocaleString();
    
    console.log('✏️  EDITED TRADING SIGNAL DETECTED! ✏️');
    console.log('─'.repeat(60));
    console.log(`📊 Currency/Asset: ${signalDetails.currency}`);
    console.log(`📈 Action: ${signalDetails.action}`);
    console.log(`🎯 Entry Zone: ${signalDetails.entryZone}`);
    console.log(`💰 TP 1: ${signalDetails.tp1}`);
    console.log(`💰 TP 2: ${signalDetails.tp2}`);
    console.log(`🛑 Stop Loss: ${signalDetails.stoploss}`);
    if (signalDetails.source) {
      console.log(`🔗 Source: ${signalDetails.source}`);
    }

    // Images already handled above if present
    broadcast('signal_detected', {
      signal: signalDetails,
      chatId: msg.chat.id,
      chatType: msg.chat.type,
      chatTitle,
      user: { id: msg.from.id, username, firstName: msg.from.first_name || '', lastName: msg.from.last_name || '' },
      messageId: msg.message_id,
      date: editDate,
      images: savedPaths,
      edited: true
    });

    console.log('─'.repeat(60));
    console.log(`📨 Chat: ${chatTitle}`);
    console.log(`👤 User: @${username}`);
    console.log(`🕐 Edit Time: ${editDate}`);
    console.log(`📝 Message ID: ${msg.message_id}`);
    console.log('─'.repeat(60));
    console.log(`📄 Updated Message:`);
    console.log(textOrCaption);
    console.log('─'.repeat(60));
    console.log('');
  }
});

// Listen for channel posts
bot.on('channel_post', async (msg) => {
  const textOrCaption = getMessageTextOrCaption(msg) || '[No text content]';
  const imagePresent = hasImage(msg);

  // Always save images when present
  let savedPaths = [];
  if (imagePresent) {
    console.log('📥 Image detected in channel post. Downloading...');
    savedPaths = await downloadImagesFromMessage(msg);
    if (savedPaths.length > 0) {
      console.log('🖼️ Saved Images:');
      const urls = savedPaths.map((p) => toPublicUrl(p));
      urls.forEach((u) => console.log(`   - ${u}`));
      console.log('─'.repeat(60));
      const chatTitle = msg.chat.title || 'Unknown Channel';
      broadcast('image_saved', {
        paths: savedPaths,
        urls,
        chatId: msg.chat.id,
        chatType: msg.chat.type,
        chatTitle,
        user: null,
        messageId: msg.message_id,
        date: new Date(msg.date * 1000).toLocaleString(),
        caption: textOrCaption
      });
    }
  }

  if (isTradingSignal(textOrCaption)) {
    const signalDetails = extractSignalDetails(textOrCaption);
    const chatTitle = msg.chat.title || 'Unknown Channel';
    const date = new Date(msg.date * 1000).toLocaleString();
    
    console.log('📢 CHANNEL TRADING SIGNAL! 📢');
    console.log('─'.repeat(60));
    console.log(`📊 Currency/Asset: ${signalDetails.currency}`);
    console.log(`📈 Action: ${signalDetails.action}`);
    console.log(`🎯 Entry Zone: ${signalDetails.entryZone}`);
    console.log(`💰 TP 1: ${signalDetails.tp1}`);
    console.log(`💰 TP 2: ${signalDetails.tp2}`);
    console.log(`🛑 Stop Loss: ${signalDetails.stoploss}`);

    // Images already handled above if present
    broadcast('signal_detected', {
      signal: signalDetails,
      chatId: msg.chat.id,
      chatType: msg.chat.type,
      chatTitle,
      user: null,
      messageId: msg.message_id,
      date,
      images: savedPaths,
      imageUrls: savedPaths.map((p) => toPublicUrl(p))
    });

    console.log('─'.repeat(60));
    console.log(`📢 Channel: ${chatTitle}`);
    console.log(`🕐 Time: ${date}`);
    console.log(`📝 Message ID: ${msg.message_id}`);
    console.log('─'.repeat(60));
    console.log(`📄 Full Message:`);
    console.log(textOrCaption);
    console.log('─'.repeat(60));
    console.log('');
  }
});

// Listen for edited channel posts
bot.on('edited_channel_post', async (msg) => {
  const textOrCaption = getMessageTextOrCaption(msg) || '[No text content]';
  const imagePresent = hasImage(msg);

  // Always save images when present
  let savedPaths = [];
  if (imagePresent) {
    console.log('📥 Image detected in edited channel post. Downloading...');
    savedPaths = await downloadImagesFromMessage(msg);
    if (savedPaths.length > 0) {
      console.log('🖼️ Saved Images:');
      const urls = savedPaths.map((p) => toPublicUrl(p));
      urls.forEach((u) => console.log(`   - ${u}`));
      console.log('─'.repeat(60));
      const chatTitle = msg.chat.title || 'Unknown Channel';
      broadcast('image_saved', {
        paths: savedPaths,
        urls,
        chatId: msg.chat.id,
        chatType: msg.chat.type,
        chatTitle,
        user: null,
        messageId: msg.message_id,
        date: new Date((msg.edit_date || msg.date) * 1000).toLocaleString(),
        caption: textOrCaption,
        edited: true
      });
    }
  }

  if (isTradingSignal(textOrCaption)) {
    const signalDetails = extractSignalDetails(textOrCaption);
    const chatTitle = msg.chat.title || 'Unknown Channel';
    const editDate = new Date(msg.edit_date * 1000).toLocaleString();
    
    console.log('✏️  EDITED CHANNEL TRADING SIGNAL! ✏️');
    console.log('─'.repeat(60));
    console.log(`📊 Currency/Asset: ${signalDetails.currency}`);
    console.log(`📈 Action: ${signalDetails.action}`);
    console.log(`🎯 Entry Zone: ${signalDetails.entryZone}`);
    console.log(`💰 TP 1: ${signalDetails.tp1}`);
    console.log(`💰 TP 2: ${signalDetails.tp2}`);
    console.log(`🛑 Stop Loss: ${signalDetails.stoploss}`);

    // Images already handled above if present
    broadcast('signal_detected', {
      signal: signalDetails,
      chatId: msg.chat.id,
      chatType: msg.chat.type,
      chatTitle,
      user: null,
      messageId: msg.message_id,
      date: editDate,
      images: savedPaths,
      imageUrls: savedPaths.map((p) => toPublicUrl(p)),
      edited: true
    });

    console.log('─'.repeat(60));
    console.log(`📢 Channel: ${chatTitle}`);
    console.log(`🕐 Edit Time: ${editDate}`);
    console.log(`📝 Message ID: ${msg.message_id}`);
    console.log('─'.repeat(60));
    console.log(`📄 Updated Message:`);
    console.log(textOrCaption);
    console.log('─'.repeat(60));
    console.log('');
  }
});

// Error handling
bot.on('error', (error) => {
  console.error('❌ Bot Error:', error);
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling Error:', error);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down bot...');
  bot.stopPolling();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down bot...');
  bot.stopPolling();
  process.exit(0);
});

console.log('✅ Trading Signal Bot is now running!');
console.log('🎯 Only trading signals will be logged (GOLD, EURUSD, BTC, etc.)');
console.log('📊 Looking for: BUY/SELL + Entry Zone + TP levels + Stop Loss');
console.log('🖼️ Images will be saved to the "images" folder when present');
console.log('Press Ctrl+C to stop the bot');
console.log('');
