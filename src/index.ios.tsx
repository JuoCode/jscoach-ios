import * as React from 'react';
import { PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  ListView,
  View,
  TabBarIOS,
  TouchableHighlight
} from 'react-native';
import List from './components/List';
import { JSCoachDataItem } from './ts/jscoach.d';

interface AppProps extends React.Props<View> {
}
interface AppState extends React.Props<View> {
  packages: PropTypes.array
}

export default class App extends Component<AppProps, AppState> {
  constructor() {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      packages: ds.cloneWithRows([])
    }
  }
  
  render () {
    return (
      <NavigatorIOS
        initialRoute={{
          component: List,
          title: 'JSCoach'
        }}
        style={{ flex: 1 }}
      />
    )
  }
}


var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});
