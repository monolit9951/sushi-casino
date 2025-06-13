FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
<<<<<<< HEAD
RUN npm install
=======

RUN npm ci --silent

>>>>>>> 87ba189562e35a36cf29c72ca31b14b99b347a57
COPY . .
RUN npm run build

FROM nginx:alpine

<<<<<<< HEAD
# Убираем старые конфиги и шаблоны, чтобы envsubst не подменял их на лету
RUN rm -rf /etc/nginx/conf.d/*.conf \
          /etc/nginx/templates/*.template

# Копируем свой единый nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем билд
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
=======
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

>>>>>>> 87ba189562e35a36cf29c72ca31b14b99b347a57
CMD ["nginx", "-g", "daemon off;"]