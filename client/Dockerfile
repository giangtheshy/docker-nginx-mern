FROM node:14-alpine3.10 as builder

LABEL version="1.0"
LABEL description="React Webpack for FrontEnd of the Library API"

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .


CMD ["npm","run","build"]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html