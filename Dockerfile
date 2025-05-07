FROM node:18
WORKDIR /app
COPY . /app
RUN npm install -y
CMD ["node", "/app/index.js"]
