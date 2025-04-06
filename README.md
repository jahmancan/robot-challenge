# RobotChallenge

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Step by step guideline how to run the applcation

### Prerequisits:

-  NodeJS running on the machine, version >= 20 (Pro tip: use nvm instead of 1 NodeJS instance, [more info](https://github.com/coreybutler/nvm-windows) on this)

### Steps:

```bash
npm install -g @angular/cli
```

-  navigate to the directory in a terminal where you want to clone the repository:

```bash
git clone https://github.com/jahmancan/robot-challenge.git
```

-  navigate to the folder where you cloned the application

```bash
npm install
```

-  after all the packages are successfully installed run the application

with production settings without source map

```bash
npm run start:prod
```

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open you can click [here](http://localhost:4200/). The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

### Alternative deployment ways

-  if you want to run the application from a webserver
-  first you need to build the application with production

```bash
npm run build:prod
```

-  copy the [APPLICATION_ROOT_DIR]/dist/robot-challenge folder content into whatever other folder your webserver is serving from
-  type your localhost:[PORT] into your browser to see the result
