FROM node

RUN mkdir /app

RUN apt-get update && apt-get -y install cron

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

COPY . /app
