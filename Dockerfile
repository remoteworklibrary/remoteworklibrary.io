FROM klakegg/hugo:0.69.2 AS hugo

COPY . /src
WORKDIR /src
RUN hugo --buildDrafts --baseURL=https://remoteworklibrary-zkop4aqvwa-ez.a.run.app/

# Build runtime image
FROM nginx:1.18.0-alpine
COPY --from=hugo /target /usr/share/nginx/html