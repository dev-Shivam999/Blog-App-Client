# REACT VITE CLIENT
FROM node:20


WORKDIR /usr/app


COPY tsconfig*.json ./
COPY package*.json ./


RUN npm install


COPY . .




EXPOSE 5173


CMD ["npm", "run", "dev"]



