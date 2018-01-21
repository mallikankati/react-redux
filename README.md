# react-redux
Sample application with react and redux framework. In this application we retrieve video and comment details for a given Youtube video id and display it.

To get general idea, there is a mockup located in `mockup.pdf`.

In order to run the application, require following steps

### one time setup

**Note:** npm need to be install before execute following steps

1) Install webpack
  
  ```
  npm install webpack --save-dev
  ```
  
2) Install babel
  
  ```
  npm i babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
  ```
  
3) Install react, react-dom and react-router-dom

  ```
  npm i react react-dom react-router-dom -S
  ```
  
5) Install redux and react-redux

  ```
  npm i redux react-redux -S
  ```
  
6) Install extract-text-webpack-plugin, css-loader, style-loader, sass-loader and node-sass

  ```
  npm i css-loader style-loader sass-loader node-sass extract-text-webpack-plugin --save-dev
  ```
  
7) Install webpack-dev-server to test locally while developing app

  ```
  npm install webpack-dev-server --global
  npm install webpack-dev-server --save-dev
  ```
8) For hot replacement code in dev env

  ```
  npm install react-hot-loader --save-dev
  ```

### Testing application

 1) After installing above libraries, on command prompt run webpack
 
 ```
 >webpack
 Hash: dd5e66ff24dd38fd5fd6
Version: webpack 3.10.0
Time: 4663ms
       Asset     Size  Chunks                    Chunk Names
index.min.js  4.07 MB       0  [emitted]  [big]  app
     app.css  6.22 kB       0  [emitted]         app
[./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss 6.54 kB [built]
[./node_modules/moment/locale recursive ^\.\/.*$] ./node_modules/moment/locale ^\.\/.*$ 2.88 kB {0} [optional] [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 517 bytes {0} [built]
[./src/app/actions/ActionTypes.js] ./src/app/actions/ActionTypes.js 1.74 kB {0} [built]
   [0] multi ./src/app/index.js ./src/app/assets/sass/all.scss 40 bytes {0} [built]
[./src/app/actions/videoActions.js] ./src/app/actions/videoActions.js 6.92 kB {0} [built]
[./src/app/api/YoutubeAPI.js] ./src/app/api/YoutubeAPI.js 3.54 kB {0} [built]
[./src/app/assets/sass/all.scss] ./src/app/assets/sass/all.scss 41 bytes {0} [built]
[./src/app/index.js] ./src/app/index.js 1.26 kB {0} [built]
[./src/app/reducers/mainReducer.js] ./src/app/reducers/mainReducer.js 3.13 kB {0} [built]
[./src/app/store/configureStore.js] ./src/app/store/configureStore.js 860 bytes {0} [built]
[./src/config/config.json] ./src/config/config.json 149 bytes {0} [built]
    + 238 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/app/assets/sass/all.scss:
    [./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss 6.54 kB {0} [built]
        + 1 hidden module
 ```
 
 2) Access application using index.html file from browser or npm start
 
 ```
 >npm start
 > react-redux-impl@1.0.0 start /Users/mallik/workspace/react-redux-impl
> webpack-dev-server --hot --inline

Project is running at http://localhost:8080/
webpack output is served from /
Hash: bffd7e65136557083549
Version: webpack 3.10.0
Time: 5606ms
       Asset     Size  Chunks                    Chunk Names
index.min.js  4.97 MB       0  [emitted]  [big]  app
     app.css  6.22 kB       0  [emitted]         app
[./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss 6.54 kB [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 7.63 kB {0} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.69 kB {0} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.06 kB {0} [built]
[./node_modules/webpack/hot ^\.\/log$] (webpack)/hot nonrecursive ^\.\/log$ 170 bytes {0} [built]
[./node_modules/webpack/hot/dev-server.js] (webpack)/hot/dev-server.js 1.61 kB {0} [built]
[./node_modules/webpack/hot/emitter.js] (webpack)/hot/emitter.js 77 bytes {0} [built]
[./node_modules/webpack/hot/log-apply-result.js] (webpack)/hot/log-apply-result.js 1.31 kB {0} [built]
   [0] multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/app/index.js ./src/app/assets/sass/all.scss 64 bytes {0} [built]
[./node_modules/webpack/hot/log.js] (webpack)/hot/log.js 1.04 kB {0} [built]
[./src/app/actions/videoActions.js] ./src/app/actions/videoActions.js 6.92 kB {0} [built]
[./src/app/assets/sass/all.scss] ./src/app/assets/sass/all.scss 41 bytes {0} [built]
[./src/app/components/App.js] ./src/app/components/App.js 3.47 kB {0} [built]
[./src/app/index.js] ./src/app/index.js 1.26 kB {0} [built]
[./src/app/store/configureStore.js] ./src/app/store/configureStore.js 860 bytes {0} [built]
    + 260 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/app/assets/sass/all.scss:
    [./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/app/assets/sass/all.scss 6.54 kB {0} [built]
    [./node_modules/css-loader/lib/css-base.js] ./node_modules/css-loader/lib/css-base.js 2.26 kB {0} [built]
webpack: Compiled successfully.
 ```
