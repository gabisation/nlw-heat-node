# NLW Heat

Stage 1 - Node project developed throughout NLW Heat event by Rocketseat.

## Requirements

* NodeJS
* Yarn

## Built with

* TypeScript
* JSON Web Token
* Socket.io
* Prisma
* Express

## Installation

1. After cloning the repo, create a file called `.env` with the following variables:
* `GITHUB_CLIENT_SECRET`
* `GITHUB_CLIENT_ID`
* `JWT_SECRET`

> 💡 If you don't know how to get those Github credentials, check the documentation on [how to create an OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

2. Toggle your terminal and install the dependencies using `yarn`

3. Run the migrations using `yarn prisma migrate dev`

4. Start the show with `yarn dev`

5. Application available on `http://localhost:4000`
