FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 80

CMD [ "node","--max_old_space_size=16384", "./src/server.js" ]

