FROM node:18-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm install

RUN npm run build

CMD ["npm", "start"]


EXPOSE 5002


