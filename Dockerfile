FROM node:20-alpine AS base
WORKDIR /app
COPY . .
RUN npm i

EXPOSE 3000

CMD ["npm", "run", "dev"]
