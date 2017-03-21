FROM node:6

ADD server-with-redis.js /home/node/server-with-redis.js
ADD package.json /home/node/package.json

WORKDIR /home/node

RUN npm install
RUN npm install pm2 -g

# ENTRYPOINT ["pm2", "start", "server-with-redis.js"]
CMD ["pm2", "start", "server-with-redis.js"]

EXPOSE 3000