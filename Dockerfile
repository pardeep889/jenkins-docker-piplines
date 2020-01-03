FROM node:10

# set maintainer
LABEL maintainer "pardeep889@hotmail.com"

# Create app directory
WORKDIR /usr/src/app

COPY . ./
RUN rm -rf node_modules
RUN npm install
RUN  npm run test
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

EXPOSE 8000
CMD [ "npm", "start" ]