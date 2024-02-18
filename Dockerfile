FROM node:18.17-alpine3.17
WORKDIR /landing-page
COPY ./package.json ./.npmrc /landing-page
RUN npm install -g npm@9.5.0
RUN npm install --legacy-peer-deps
RUN npm cache clean --force
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
