FROM node:latest
WORKDIR /app
COPY . /app/
RUN npm install -y
EXPOSE 3000
CMD ["node", "/app/app.js"]
