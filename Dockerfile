# stage 1
From node:latest as node

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build  --prod

# stage 2

FROM nginx:alpine

COPY --from=node /app/dist/argon-design-system-angular /usr/share/nginx/html
