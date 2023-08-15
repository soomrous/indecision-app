# indecision-app
React project 1
step 1 install nodejs from nodejs.org

step 2 check node version installed by running node -v command in cmd

step 3 check npm version by running npm -v command in cmd

step 4 install yarn by running npm install -g yarn command in cmd

step 5 check yarn version by running yarn --version command in cmd (note if you are windows system restart the system so yarn can get successfully configerd 

step 6 install live server. create project folder and navigate to the folder in cmd and run yarn global add live-server command from project folder or run cmd command from user root in cmd by running npm install -g live-server (Check the live-server version run live-server -v command)

step 7 open cmd navigate to project folder and run command: live-server public (public is the main folder in the project folder that has index.html file.  

step 8 install global dependency by running command in cmd from project folder location yarn globel add babel-cli@6.24.1 or run cmd command from user root in cmd by running npm install -g babel-cli@6.24.1 (note after install check babel --help to see the list if you are seeing the list you are good to go.

step 9 install local dependency by running command in cmd from project folder location yarn init
enter on questions and add author name if you want. Now you should see the Package.json file in the project files.

step 10 install presets by running command in cmd from project folder location yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 (note these are 2 commands you can run individually or together.)


step 11 babel src/app.js --out-file=public/scripts/app.js --presets=env,react
*********************************************************************************
* run this command to watch the changes and update the code once it is saved    *
* keep this running 										  *
* babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch *
*********************************************************************************

Step 12 - open cmd navigate to project folder and run command: live-server public (public is the main folder in the project folder that has index.html file.  

incase you delete node_modules folder from project you can reinstall it by running yarn install command from project root directory in the cmd it will bring th node_model back and you should be able to run commands in step 11

VS Code Extension 
1.  Babel ES6/ES7
2.  Path Intellisense

