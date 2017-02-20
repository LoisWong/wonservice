# wonservice

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ heroku git:clone -a wonservice
$ cd wonservice
$ npm install
$ npm start

```

The Server should now be running on [localhost:3000](http://localhost:3000/) and You will see console log "Listening at:3000".
You can run client.js to test JSON request and response. Open a new terminal:

$ node client.js


## Deploying to Host

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.
Upload the whole folder to your host. Run the server:

$ node index.js

The current version of wonservice is uploaded to service.wonlure.com and the server is running. 

## Test by Hostman

Download [Hostman API](https://www.getpostman.com/) POST to service.wonlure.com/ or your ip(domain) address.
In Body part select RAW with JSON type and type test data. Then send. 


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
