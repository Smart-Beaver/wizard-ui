FROM node:20-alpine AS base
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm i

EXPOSE 3000

CMD ["npm", "run", "dev"]
