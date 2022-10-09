# to start a next app

- npm init -y
- npm install next react react-dom

- mkdir pages
- - create main app file \index.js
- mkdir public

- in app.js create a react functional component called MyApp
  <i>this is the main parent component, similar to react index.js/app.js combined</i>

### add these scripts to package.json

- "dev" : "next dev",
  <i>npm run dev to start development on port 3000 by default</i>

- "build" : "next build",
  <i>npm run build for production ready build of webapp</i>

- "start" : "next start"
  <i>npm run start is the script for chosen deployment method</i>

# changelog

<!-- //////////////////////////////////////////////// -->

# Next Steps

- - add redux because this prop drilling is already taking a toll
