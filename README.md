# Eye Saver
## Version 1.0.0
Coded by Eloise Zeng

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

How to use EyeSaver: For Non-technical People
---------------
## Installation
### Prerequisites
Install Node.js <br> Install Git <br> Install Python <br>
### Mac OS
Copy this into your terminal to install everything you need to run EyeSaver. 

git clone https://github.com/eloisezeng/eyesaver_mac <br>
cd eyesaver_mac <br>
pip3 install -r requirements.txt <br>
cd .. <br>
git clone https://github.com/eloisezeng/eyesaver_website <br>
cd eyesaver_website <br>
npm install <br>
cd .. <br>

### Windows OS
Copy this into your Powershell to install everything you need to run EyeSaver. 

git clone https://github.com/eloisezeng/eyesaver_windows <br>
cd eyesaver_windows <br>
pip3 install -r requirements.txt <br>
cd .. <br>
git clone https://github.com/eloisezeng/eyesaver_website <br>
cd eyesaver_website <br>
npm install <br>
cd .. <br>

## How to launch the desktop app
Run this command in the Terminal for MacOS or the Powershell for WindowsOS: <br>
cd eyesaver_mac; python3 local_server.py & cd .. && cd eyesaver_website ; npm start <br><br>
Search the website, 192.168.X.X:3000 (ip address of your computer), on your mobile device
### Find ip address on MacOS
Go to System Preferences. Open Network. You should see your IP address (192.168.X.X) under "Turn Wi-Fi Off"
### Find ip address on WindowsOS 
Search for Wifi-Settings. Click Hardware properties. You should see your IP address (192.168.X.X) next to IPv4 address.

#### Close the Terminal/Powershell when you want to shut down the webapp (no longer be able to access 192.168.X.X:3000)


For techinal people
---------------
## Prerequisites for coders interested in forking

Install Node.js <br>
Run npm install in the project directory. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
