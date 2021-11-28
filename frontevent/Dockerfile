FROM node:lts

RUN apt-get update && apt-get upgrade && apt install chromium -y

ENV CHROME_BIN=/usr/bin/chromium

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install npm -g

RUN npm install @angular/cli@13.0.1 -g

RUN npm cache clean --force

RUN npm install --force

COPY . /usr/src/app/

VOLUME ["/usr/src/app"]

EXPOSE 4200
