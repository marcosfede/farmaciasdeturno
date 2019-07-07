FROM node:12-alpine

RUN mkdir /app

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm ci

COPY . /app
