FROM node:14.7

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g npm sails nodemon && npm cache clean --force && npm install

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 1337
