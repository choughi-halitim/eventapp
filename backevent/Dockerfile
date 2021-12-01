FROM node:lts

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install npm -g

RUN npm install sails@1.5.0 -g

RUN npm install nodemon -g

RUN npm cache clean --force

RUN npm install --force

COPY . /usr/src/app/

VOLUME ["/usr/src/app"]

EXPOSE 1337
