FROM node:13.14.0

COPY . ./

RUN npm install --silent
RUN npm install -g serve
RUN npm run build --silent


EXPOSE 3000

CMD ["serve","-s", "build"]
