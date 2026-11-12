FROM node:26-alpine

WORKDIR /app

RUN npm install --global pnpm@12.18.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
