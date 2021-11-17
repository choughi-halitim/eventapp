FROM node:latest


RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm cache clean --force && npm install sails -g

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 1337

EXPOSE 5432
