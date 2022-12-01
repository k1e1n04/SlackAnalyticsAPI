FROM node:lts-alpine

WORKDIR /usr/src/app
COPY ./SlackAnalyticsAPI/express_api/package.json ./
COPY ./SlackAnalyticsAPI/express_api/package-lock.json* ./
COPY ./SlackAnalyticsAPI/express_api/ ./

RUN npm install --production --silent && mv node_modules ../
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 8000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
