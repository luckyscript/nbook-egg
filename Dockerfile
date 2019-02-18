FROM node:11.4.0-alpine

ENV TIME_ZONE=Asia/Shanghai

RUN apk add --no-cache bash

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i --production

COPY . /usr/src/app

RUN chmod +x /usr/src/app/wait-for-it.sh

RUN npm run tsc

EXPOSE 7001