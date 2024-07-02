FROM node:21

WORKDIR D:\cour\WebService\tp1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js"]