FROM node:10

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm i -g @angular/cli@7.3.10

COPY . .

EXPOSE 4200