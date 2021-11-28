FROM node:lts

RUN apt-get update && apt-get upgrade && apt install chromium -y

ENV CHROME_BIN=/usr/bin/chromium

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install -g npm  @angular/cli@13 && npm cache clean --force && npm install --force

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 4200
