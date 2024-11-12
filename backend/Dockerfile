FROM node:20.11.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js ./

EXPOSE 5000

CMD [ "npm", "start" ]