FROM node:13.14.0

WORKDIR '/app'

COPY package.json .

COPY package-lock.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm","start"]