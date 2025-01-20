# Connect-Bot

## Local setup
 The bot is divided in 2 parts working on the local server ,and the part interacting with the user 

```bash
 git clone https://github.com/E-creator513/ConnectBot.git
```

## Server Setup

```bash
# setup venv
cd venv
cd scripts
source activate
#in the project directory
```
 Check the Requirements.txt after cloning or run this statement in the cmd
 ```bash
pip freeze>requirements.txt 
```

 Start the backend server 

 ```bash
python app.py 
```
it should be running on 
 ```bash
(venv) C:\Users\User\Downloads\hacka\hacka>python app.py
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 225-026-118

```
# Interface User
Run yarn installation and build the app

 ```bash

 yarn install
yarn install v1.22.22
warning ..\..\..\package.json: No license field
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.58s.
PS C:\Users\User\Downloads\hacka\hacka\my-app> yarn build
warning ..\..\..\package.json: No license field
$ react-scripts build
Creating an optimized production build...

 ```
