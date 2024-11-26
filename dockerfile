# REACT VITE CLIENT
FROM node:20


WORKDIR /usr/app


COPY tsconfig*.json ./
COPY package*.json ./


RUN npm install
RUN npm i -g serve


COPY . .


RUN npm run build


EXPOSE 5173


CMD ["serve'", "-s", "dist"]



