# Dev Jobs

Init project:

```cmd
nmp init -y
```

## Express  and Handelbars

Install dependencies:

```cmd
npm i express express-handlebars
```

## Nodemon

Add dependecy in development **nodemon**

```cmd
npm i nodemon -D
```

## App

Create file **index.js** and add in **package.json** star command:

```json
  "scripts": {
    "start": "nodemon index.js"
  },
```

Execute in command line:

```cmd
npm start
```

## Router

Create folder **router**

## dotenv  mongoose shortid slug express-session cookie-parser

```cmd
npm i --save dotenv mongoose shortid slug express-session cookie-parser
```

set environment variable DATABASE:

```properties
DATABASE=mongodb+srv://root:********@cluster0.uqwwtky.mongodb.net/devjobs
PORT=3000
NODE_ENV=development
SECRET=supersecretoo
KEY=llavesecreta
```

## connect-mongo

Use version 3:
```cmd
npm i connect-mongo@3
```
## Mongoose

Info in https://mongoosejs.com/

## Trix Editor

Review link https://github.com/basecamp/trix

```html
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
    <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
```

```html
        <input id="x" type="hidden" name="content">
        <trix-editor input="x"></trix-editor>
```

## Webpack

```cmd
npm i --save-dev @babel/core @babel/preset-env babel-loader webpack webpack-cli
```

```cmd
npm i concurrently
```

Add in package.json scripts

```json
  "scripts": {
    "dev": "nodemon index",
    "watch" : "webpack --w --mode development",
    "start": "concurrently \"npm run dev\" \"npm run watch\" "
  },
```

## Bcrypt

```cmd
npm i --save bcrypt
```

## Connect-flah & Express-validator

Connect-flash by show messages, and express-validator by validations

```cmd
npm i --save connect-flash express-validator@5.3.0
```

## Passport

```cmd
npm i --save passport passport-local
```
