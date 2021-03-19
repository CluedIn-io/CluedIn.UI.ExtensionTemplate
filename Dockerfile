FROM node:10-alpine as build
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG NPM_TOKEN
ENV NPM_TOKEN $NPM_TOKEN

WORKDIR /usr/src/app

COPY package.json .npmrc ./

RUN npm i -g react-scripts@3.4.1 --unsafe-perm
RUN npm i fs-extra
RUN npm i --force -g yarn@^1.2.24
RUN npm i

COPY . ./
RUN npm run build

FROM nginx

# Fix NGINX permissions + config

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

RUN chown -R 1000:1000 /var/cache/nginx
RUN chown -R 1000:1000 /var/log/nginx
RUN chown -R 1000:1000 /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && chown -R 1000:1000 /var/run/nginx.pid

# Copy CluedIn specific files..

COPY docker/*.sh /

COPY --from=build /usr/src/app/.env /usr/share/nginx/html
COPY --from=build /usr/src/app/node_modules/@cluedin/ui/LICENSE /usr/share/nginx/html
COPY --from=build /usr/src/app/build /usr/share/nginx/html

RUN chown -R 1000:1000 /usr/share/nginx/html
RUN chown 1000:1000 /create-env-file.sh /entrypoint.sh
RUN chmod +x /create-env-file.sh /entrypoint.sh

USER 1000

CMD [ "/entrypoint.sh", "/usr/share/nginx/html/env-config.js", "/usr/share/nginx/html/.env" ]
