FROM node:6.1.0

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
ADD . /app/

ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 8080
  
CMD npm run start
