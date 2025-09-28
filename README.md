# Andromeda Express TypeScript ES module Server

## Andromeda setup

- Check docs in <https://github.com/tryandromeda/andromeda>
- `andromeda run hello-world.js`
- `andromeda run hello-world.ts`

## Project setup

- `npm install`

- Run with Node `npm run node:start`

- Run with Node `npm run andromeda:start` or `andromeda run src/app.ts`

## Andromeda image

- `andromeda` folder

## Multi-stage build

- The app dependencies are built with Node and npm

- The app runner uses Andromeda

```sh
# TS
docker build -t dercilio/andromeda-ts-express:0.1.0-draft43 -f ts.dockerfile .

docker run --name andromeda-ts-express -p 8080:8080 dercilio/andromeda-ts-express:0.1.0-draft43

# JS
docker build -t dercilio/andromeda-js-express:0.1.0-draft43 -f js.dockerfile .

docker run --name andromeda-js-express -p 8080:8080 dercilio/andromeda-js-express:0.1.0-draft43
```
