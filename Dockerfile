FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY ./public /usr/src/app/public
COPY ./server /usr/src/app/server
COPY ./dist /usr/src/app/dist
EXPOSE 3000
CMD [ "npm", "run", "serve" ]
