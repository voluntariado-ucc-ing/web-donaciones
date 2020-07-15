FROM node:13.14.0

WORKDIR '/app'

COPY package.json .

COPY package-lock.json ./

RUN npm install --silent
RUN npm install -g serve
RUN npm run build --silent

COPY . .

EXPOSE 3000

CMD ["serve","-s", "build"]
