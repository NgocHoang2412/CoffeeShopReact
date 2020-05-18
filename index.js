/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
if (Platform.OS === 'web') {
	AppRegistry.runApplication(appName, {
		rootTag: document.getElementById('root'),
	});
}
