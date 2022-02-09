FROM node:16

# RUN yarn set version berry

WORKDIR /app/

RUN ls
COPY package.json ./package.json
RUN ls
RUN yarn install

COPY . .

EXPOSE 8181
ENV PORT 8181
CMD ["node", "server.js"]
