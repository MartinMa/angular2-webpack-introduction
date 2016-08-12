# WEBPACK: AN INTRODUCTION
## Angular2 for TypeScript

This code is based on the official Angular.io guide [Create your Angular 2 applications with a Webpack based tooling](https://angular.io/docs/ts/latest/guide/webpack.html) with a few changes/improvements.

Changes:
* Added ESLint Configuration - The Pluggable JavaScript linter
* Added http-server npm package to run the production build

### Installation instructions
Open up a command prompt and navigate to the project folder.

Verify that you are running at least node **v4.x.x** and npm **3.x.x** by running `node -v` and `npm -v`. Older versions produce errors.

Install all dependencies: `npm install`

Start development server: `npm start`
Build for production: `npm run build`
Run production build (remember to build first): `npm run server:prod`
Run tests: `npm test`