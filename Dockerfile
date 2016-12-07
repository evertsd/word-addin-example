FROM node
MAINTAINER Justin Marney <gotascii@gmail.com>

RUN npm install -g bower yo generator-office gulp tsd

RUN mkdir -p /opt/irregardless-word

WORKDIR /opt/irregardless-word
