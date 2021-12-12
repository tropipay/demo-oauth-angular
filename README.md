# Oauth integration with Angular demo 
This app is a simple example of integration with TropiPay using technologies such as [Angular](https://angular.io/start), [KsMf](https://github.com/ameksike/ksmf/wiki), etc.

## Install demo
- git clone https://github.com/tropipay/demo-oauth-angular.git
- cd demo-oauth-angular
- npm install 
- cd client/
- npm install

## Run demo
- rename '.env.develop' to '.env'
- npm run client:watch
- npm start 

## Project skeleton 
```
- client 
|	+ build
|	+ public
|	+ src
|	- package.json
|	- README.md
- server	
|	+ bin/
|	|    - server.js
|	+ cfg/
|	|    - config.json
|	|    - core.json
|	+ src/
|	|    + app/
|	|    |    - index.js
|	|    + profile/
| 	|    |    + controller/
|	|    |    |    - DefaultController.js
|	|    + security/
| 	|    |    + controller/
|	|    |    |    - DefaultController.js
|	+ db/
|	|    + migrations/
|	|    + models/
- package.json
- .env
- .gitignore
- README.md
```

## Client Develop
- npm install -g @angular/cli
- ng new client
- cd client/
- ng serve --open 
- ng generate component cli
- ng generate component doc
- ng generate component social
- ng generate component toolbar
- ng generate component footer
- ng generate component connect
- ng generate service tropipay

## Server Develop
- npm init
- npm install ksmf



