FROM node:lts

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g npm  @angular/cli && npm cache clean --force && npm install --force

COPY . .

VOLUME ["/usr/src/app"]

EXPOSE 4200
