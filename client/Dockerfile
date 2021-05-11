# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]