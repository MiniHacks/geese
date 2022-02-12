### Basically copy-pasted from https://github.com/vercel/next.js/blob/3e6035937aa5ba819d72198aa1314ccb9a76a804/examples/with-docker/Dockerfile
FROM node:16 as builder

RUN yarn set version berry

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]