FROM klakegg/hugo:0.69.2-onbuild AS hugo

# Build runtime image
FROM nginx:1.18.0-alpine
COPY --from=hugo /target /usr/share/nginx/html