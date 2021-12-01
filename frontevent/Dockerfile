FROM node:lts

RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium

RUN apt-get install -qqy x11-apps

ENV CHROME_BIN=chromium

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
