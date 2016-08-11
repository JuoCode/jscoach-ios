/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './built/index.ios'
import Login from './built/components/Login'

AppRegistry.registerComponent('HelloRN', () => Login);
