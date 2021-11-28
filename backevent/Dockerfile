FROM node:lts

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm sails nodemon mocha && npm cache clean --force && npm install --force

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 1337
