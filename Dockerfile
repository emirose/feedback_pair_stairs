FROM node:6.1.0

RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install

ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 8080
  
CMD npm run start
