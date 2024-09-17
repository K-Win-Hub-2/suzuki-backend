FROM node:alpine

WORKDIR /usr/src/suzuki

COPY package*.json ./ 

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]