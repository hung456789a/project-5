FROM node:latest
WORKDIR /app
COPY node_modules /app/
COPY . /app/
RUN npm install -y
CMD ["node", "/app/index.js"]
