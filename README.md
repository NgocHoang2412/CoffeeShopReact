# **Welcome to Mobile Order!**
link design: https://projects.invisionapp.com/prototype/ck8ldjeiz000apc010ashx8p9/play
This project will help for Coffee Shops manage revenue and order on mobile

**Run on web: expo start --web

**Install Node modules** by "npm install or yarn" on root project folder.  
**Linking custom asset: npx react-native link
**Run Android emulator** then "npm run android" or "yarn android" to install and run application on emulator.
**Install on android: adb devices; adb start-server; adb -s [devicename] reverse tcp:8081 tcp:8081
*** call api: import axios from './axiosApi';
/src
  /components 
    /Button 
    /Notifications
      /components
        /ButtonDismiss  
          /images
          /locales
          /specs 
          /index.js
          /styles.scss
      /index.js
      /styles.scss
  /scenes
    /Home 
      /components 
        /ButtonLike
      /services
        /processData
      /index.js
      /styles.scss
    /Sign 
      /components 
        /FormField
      /scenes
        /Login
        /Register 
          /locales
          /specs
          /index.js
          /styles.scss
  /services
    /api
    /geolocation
    /session
      /actions.js
      /index.js
      /reducer.js
    /users
      /actions.js
      /api.js
      /reducer.js
  index.js 
  store.js
