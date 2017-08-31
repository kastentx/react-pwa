# OFFLINE FIRST PWA

### w/ React, PouchDB, Cloudant

Nick Kasten
IBM Dev Intern
Summer 2017

## Quick Start

1. `git clone` this repo and `cd` into the project's root directory.
2. Execute `mv src/sample-secret.js src/secret.js` from the root directory.
3. Create a new database in your Cloudant instance.
4. Enable CORS in Cloudant and add http://localhost:3000 to the list of origin domains.
5. Add your Cloudant URL to `src/secret.js`.
6. Execute `npm install` from the root directory of the project to install dependencies.
7. Use `npm start` to start the development server and launch your app.
8. Navigate to `http://localhost:3000` to see your app runninig in your browser.

## Testing Service Workers/Offline Support

1. In Cloudant add http://localhost:5000 to the list of origin domains.
2. Run `npm run build` to run a production build.
3. Run `npm install -g serve` to install serve.
4. Run `serve -s build` to serve the production build.
5. Navigate to `http://localhost:5000` to see your app runninig in your browser.