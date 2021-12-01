# KUMOJIN EVENT APP

## ARCHITECTURE

```
     _______            _________           ________________
    | Front |----------| Backend |---------| BDD - Postgres |
     -------            ---------           ----------------
     
``` 

## GET STARTED LOCALHOST

Installer une base de donnée postgres > v10 sinon utilisé celle proposé via docker.

La base de donnée est fourni par docker

Dev local:

Installer nodejs, et docker;

Executer les commandes suivantes après que NodeJs soit installé:
```
npm install -g sails @angular/cli@13

cd ./backend

npm install

cd ..

cd ./frontend

# a cause de la version flex/layout bien utilisé le tag --force

npm install --force

docker-compose up --build -d

```

## Lancer les test en local

### BACKEND

```
cd ./backend

npm test

```
### FRONTEND

```
cd ./frontend

npm test

```
