FROM node:19.0.0-alpine3.16

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", ".env", "./"]

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run dev