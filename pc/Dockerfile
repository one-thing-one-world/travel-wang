FROM node as install_pkgs

LABEL maintainer=Mist

WORKDIR /opt/backend_manager

COPY ./.yarnrc ./
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

# build begain
FROM node

LABEL maintainer=Mist

WORKDIR /opt/backend_manager

COPY . .
COPY --from=install_pkgs /opt/backend_manager/node_modules ./node_modules

RUN yarn build

EXPOSE 4200