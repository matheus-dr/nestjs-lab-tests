FROM node:alpine

USER node

WORKDIR /home/node/app

COPY package.json ./