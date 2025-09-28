# Andromeda Express TypeScript ES module Server

## Setup

- `npm install`

## Andromeda image

- `andromeda` folder

## Multi-stage build

- The app is build with npm and Node

- The app runner is Andromeda

```sh
# TS
docker build -t dercilio/andromeda-ts-express:0.1.0-draft43 -f ts.dockerfile .

docker run --name andromeda-ts-express -p 8080:8080 dercilio/andromeda-ts-express:0.1.0-draft43

# JS
docker build -t dercilio/andromeda-js-express:0.1.0-draft43 -f js.dockerfile .

docker run --name andromeda-js-express -p 8080:8080 dercilio/andromeda-js-express:0.1.0-draft43
```
