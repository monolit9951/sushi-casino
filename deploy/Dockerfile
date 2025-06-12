FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

# Убираем старые конфиги и шаблоны, чтобы envsubst не подменял их на лету
RUN rm -rf /etc/nginx/conf.d/*.conf \
          /etc/nginx/templates/*.template

# Копируем свой единый nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем билд
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]