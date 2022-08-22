ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /app-build

COPY . .

RUN npm install
RUN npm run build
RUN npm prune --omit=dev

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=builder /app-build/node_modules ./node_modules
COPY --from=builder /app-build/package*.json .
COPY --from=builder /app-build/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]
