FROM node:alpine

RUN apk --no-cache -q add build-base libtool autoconf automake nasm

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . .
