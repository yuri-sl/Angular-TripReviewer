#Etapa 1: Compialr a aplicação
FROM node:24.13.1-alpine3.22 as build

WORKDIR /app 

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

#etapa 2 : rodar a aplicação
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/passeio-app/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]