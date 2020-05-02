FROM node:12-alpine as base
RUN mkdir /app && chown node:node /app
USER node
WORKDIR /app
ENV NODE_PATH=src
COPY --chown=node:node package*.json /app/

FROM base as development
RUN npm install --no-optional --no-audit && npm cache clean --force
COPY --chown=node:node . /app
