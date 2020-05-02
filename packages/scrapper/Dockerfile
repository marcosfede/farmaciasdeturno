FROM node:12-alpine as base
RUN mkdir /app && chown node:node /app
USER node
WORKDIR /app
ENV NODE_PATH=src
COPY --chown=node:node package*.json /app/

FROM base as development
RUN npm install --no-optional --no-audit && npm cache clean --force
COPY --chown=node:node . /app
CMD npm run schedule

FROM base as production
RUN npm install --no-optional --no-audit && npm cache clean --force
COPY --chown=node:node . /app
ENV NODE_ENV=production
RUN npm run build
CMD npm start
