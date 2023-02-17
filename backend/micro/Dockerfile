FROM node:16-alpine
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
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# COPY tslint.json .
COPY tsconfig.json .

RUN yarn build

# RUN yarn remove @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint ts-node typescript

# RUN mv ./dist/* .
# RUN rm -r ./src ./dist
# COPY ./dist .

# RUN rm -r ./src

# WORKDIR /dist

EXPOSE 3061