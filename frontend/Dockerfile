# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16 as build-stage

# Set work directory
WORKDIR /app

# Copy package.json
COPY package*.json /app/

# Install dependencies
RUN yarn install

# Copy everything to /app
COPY ./ /app/

# Set environment variables
ARG FRONTEND_ENV=production

# Set environment variables
ENV REACT_APP_ENV=${FRONTEND_ENV}

# Comment out the next line to disable tests
# RUN yarn test

# Build app
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
