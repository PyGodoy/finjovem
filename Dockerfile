# Etapa 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Etapa 2: produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
