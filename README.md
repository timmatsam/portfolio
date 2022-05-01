# Run Locally 
Switch to node 17.x `nvm use 17`
Install Dependencies `pnpm install` 
## Run Website Locally
`pnpm start-dev`
## Deploying to Production
At time of build, Heroku will follow the command written within the **Procfile**.
*"These commands are probably the same as the ones you use to run your code on your local machine."*
https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
## Testing Heroku Locally before Deploy
If a heroku build needs to be tested before merging/pushing code to master, 
use the following command: `heroku local -p {port}`
*On mac OS Monterery and above, ports 5000 and 7000 cannot be used as airplay receiver utilizes these. 
Heroku uses 5000 by default.