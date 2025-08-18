FROM node:22-alpine

WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Create images directory
RUN mkdir -p /app/images

# Expose WebSocket and HTTP ports (configurable)
ENV WS_PORT=8080 \
    HTTP_PORT=8081 \
    NODE_ENV=production

EXPOSE 8080 8081

CMD ["npm", "start"]


