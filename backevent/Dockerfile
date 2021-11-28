FROM node:14.7.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install  npm sails nodemon --global

RUN npm cache clean --force

RUN npm install

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 1337
