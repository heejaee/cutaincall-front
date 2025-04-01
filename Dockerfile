FROM node:20 AS build

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]