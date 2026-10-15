# Whelo client

The archived React application now uses Vite and the Firebase compatibility SDK.

Use Node.js 24 and run `npm ci`, then `npm start`. `npm run build` writes the deployable site to `dist`; `npm test` checks HOC composition and builds the site.

Copy `.env.example` to `.env.local` and configure the public `VITE_FIREBASE_*` values for your Firebase project. These are browser-visible settings; never add private service-account credentials or server tokens. Existing Firebase authentication and Firestore operations retain their compatibility APIs.

Bootstrap 4.6.2 CSS is preserved in `src/styles/bootstrap.css` under its included MIT license. Unused Bootstrap JavaScript and the obsolete Create React App/Recompose toolchains are no longer dependencies.
