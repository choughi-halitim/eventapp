FROM node:14.7.0

RUN apt-get update

RUN apt install chromium -y

ENV CHROME_BIN=/usr/bin/chromium

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g npm  @angular/cli@13

RUN npm cache clean --force

RUN npm install --force

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 4200
