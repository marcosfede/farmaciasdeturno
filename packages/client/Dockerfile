FROM node:alpine

RUN apk --no-cache -q add build-base libtool autoconf automake nasm

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .
