FROM node

RUN mkdir /app

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

COPY . /app
