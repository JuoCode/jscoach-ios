import * as React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  ViewStyle,
  ListViewDataSource,
  NavigatorIOS,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import * as axios from 'axios';
import Detail from './Detail'
import { JSCoachData, JSCoachDataItem } from '../ts/jscoach.d' 

interface P {
  navigator: NavigatorIOS
}
interface S {
  loaded: boolean,
  packages: ListViewDataSource
}

export default class List extends Component<P, S> {
  constructor() {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loaded: false,
      packages: ds.cloneWithRows([])
    }
  }

  componentDidMount () {
    axios.get('https://js.coach/react.json?')
      .then(resp => this.setState({
        loaded: true,
        packages: this.state.packages.cloneWithRows((resp.data as JSCoachData).packages)
      }))
  }
  
  renderRow(row: JSCoachDataItem) {
    return (
      <Row item={row} navigator={this.props.navigator} />
    )
  }
  
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 62 }}>
        {this.state.loaded
          ? <ListView
              enableEmptySections
              dataSource={this.state.packages}
              renderRow={this.renderRow.bind(this)}
            />
          : <ActivityIndicator animating={true} size='large' />
        }
      </View>
    );
  }
}

interface RowP {
  item: JSCoachDataItem,
  navigator: NavigatorIOS
}
class Row extends Component<RowP, any> {
  showDetail() {
    const item = this.props.item
    this.props.navigator.push({
      component: Detail,
      passProps: { item },
      title: item.name
    });
  }

  render() {
    const item = this.props.item
    return (
      <View style={styles.rowWrapper}>
        <TouchableHighlight
          underlayColor='#EEE'
          style={styles.paddingWrapper}
          onPress={this.showDetail.bind(this, item) }>
          <View>
            <Text style={styles.primaryText}>{item.name}</Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={styles.secondaryText}
            >
              {item.description}
            </Text>
          </View>
        </TouchableHighlight>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  rowWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE'
  } as ViewStyle,
  paddingWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8
  } as ViewStyle,
  primaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  } as ViewStyle,
  secondaryText: {
    color: '#999',
    flexWrap: 'nowrap'
  } as ViewStyle
})
