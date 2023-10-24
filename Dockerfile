FROM node:18-alpine AS development

WORKDIR /user/app

COPY package*.json .

RUN npm install
