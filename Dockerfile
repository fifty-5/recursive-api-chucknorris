FROM node:16.16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . ./

# start app
CMD ["npm", "start"]
