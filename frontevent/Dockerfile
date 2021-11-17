FROM node:lts

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install -g npm && npm install --force && npm cache clean --force && npm install @angular/cli

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 4200
