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

- adding jobs that earn realistic amounts calculated per second.
- removed shop for now and instead am working in a job application with probability of getting employed for earnings multiplyer.
- added "earning intermission" where the day is cycling and earnings are going up, if the story progresses all earnings are paused until next button is pressed.
- basic create character, just name and password for now. will expand into auth when server is implemented and then onto visual assets.
- message dialog for game status and progression updates
- added basic day cycle with ability to easily adjust how long each hour lasts in real time

# Next Steps

- - add redux because this prop drilling is already taking a toll

# Future features

- bank overdraft that will incur charges against the character if used
- Day cycle for sleep , health and not being able to do certain things while working etc
- mood - <i>happiness, depression, rested etc</i>
- shop purchases should affect mood positively as well as low funds negatively.
- social connection, could implement reluctance to socialise if new clothes etc have not been purchased. trying to add some realism here.
- add dayCycle interpreter that can take the value and output a more familiar readable time e.g. 1pm or 13:00 or both with a switch for preference! would be good to add a little visual clock later.
- HUNGER, simple way of adding some sort of realism.

# Notes

the game has become way too complex too soon before it even has the basics. its fine but its becoming too much to look through to really get off the ground. I am going to disconnect most of the functions so that i can focus on creating a basic game, then start pulling in the wicked cool ideas that i have implemented.

This should result in much faster development overall.

- start with just the time passing in hours and earnings per second
- implement a way to make choices, make the story progress and alter the earnings based on those choices e.g. get or lose a job.

- added universal Meter component, can take in attribute which depletes at a defined rate

- added commodity component, can take in price and puts up certain attribute at a certain value

- would be brilliant to map through all attributes once further developed instead of listing each one individually.
