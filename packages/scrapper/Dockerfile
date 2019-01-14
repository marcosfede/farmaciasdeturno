FROM node

RUN mkdir /app

RUN apt-get update && apt-get -y install cron

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app
