FROM node:latest
MAINTAINER Benja

#Prepare app directory
RUN mkdir -p /drupal/react
ADD package.json /drupal/react/package.json

#Installing Dependencies
WORKDIR /drupal/react
RUN npm install

#Build the app
RUN npm build

#Expose Ports
EXPOSE 8888

#start the app
CMD npm start