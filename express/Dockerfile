FROM node:16

# RUN yarn set version berry

WORKDIR /app/

RUN ls
COPY package.json ./package.json
RUN ls
RUN yarn install

COPY . .

EXPOSE 3001
ENV PORT 3001
CMD ["node", "server.js"]
