FROM node:14-alpine
RUN apk --no-cache add \
    bash \
    g++ \
    ca-certificates \
    lz4-dev \
    musl-dev \
    cyrus-sasl-dev \
    openssl-dev \
    make \
    python3
RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools
WORKDIR /usr/app
# COPY jest.config.js .
COPY package.json .
COPY tsconfig.json .
# COPY tslint.json .
RUN yarn
# ZRUN npm install pm2 -g

COPY . .

RUN yarn build

RUN yarn remove @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint ts-node typescript

RUN mv ./dist/* .
RUN rm -r ./src ./dist
# COPY ./dist .

# RUN rm -r ./src

# WORKDIR /dist

EXPOSE 4000