FROM klakegg/hugo:0.69.2-busybox AS hugo

# Copy content and build Hugo page
COPY . /data
WORKDIR /data
RUN hugo -s . --config ./config.toml --buildDrafts --minify

# Build runtime image
FROM nginx:1.18.0-alpine
COPY --from=hugo /data/public /usr/share/nginx/html