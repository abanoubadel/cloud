FROM node:6

ADD server.js /home/node/server.js
ADD package.json /home/node/package.json

WORKDIR /home/node

RUN npm install
CMD ['node', 'server.js']

EXPOSE 3000