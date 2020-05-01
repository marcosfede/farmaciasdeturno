FROM node:12-alpine as base
RUN mkdir /app && chown node:node /app
USER node
WORKDIR /app
ENV NODE_PATH=src
COPY --chown=node:node package*.json /app/

FROM base as development
RUN npm install --no-optional --no-audit && npm cache clean --force
COPY --chown=node:node . /app
CMD npm run dev

FROM base as prod
RUN npm install --no-optional --no-audit && npm cache clean --force
COPY --chown=node:node . /app
ENV NODE_ENV=production
RUN npm run build
CMD npm start

# FROM nginx:stable-alpine as nginx
# RUN apk --no-cache add curl
# COPY --from=build /app/dist/bas-app/ /usr/share/nginx/html/
# COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
