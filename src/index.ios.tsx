import * as React from 'react';
import { PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  ListView,
  ListViewDataSource,
  View,
  TabBarIOS,
  TouchableHighlight
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import List from './components/List';
import { JSCoachDataItem } from './ts/jscoach.d';

interface AppProps extends React.Props<View> {
}
interface AppState extends React.Props<View> {
  open: boolean,
  packages?: ListViewDataSource
}

export default class App extends Component<AppProps, AppState> {
  constructor() {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      open: false,
      packages: ds.cloneWithRows([])
    }
  }

  showMenu () {
    this.setState({ open: true });
  }
  
  render () {
    return (
      <SideMenu
        isOpen={this.state.open}
        menu={<View><Text>Menu</Text></View>
      }>
        <NavigatorIOS
          initialRoute={{
            component: List,
            title: 'JS.Coach',
            leftButtonTitle: 'Category',
            onLeftButtonPress: this.showMenu.bind(this)
          }}
          style={{ flex: 1 }}
        />
      </SideMenu>
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
