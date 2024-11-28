#FROM --platform=linux/ARM64 node:20 
# FROM --platform=linux/x86_64 node:20
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/x86_64 nginx

COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]