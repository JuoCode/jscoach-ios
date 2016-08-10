import * as React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  ListView,
  ListViewDataSource,
  NavigatorIOS,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import * as axios from 'axios';
import Detail from './Detail'
import { JSCoachDataItem } from '../ts/jscoach.d' 

interface P {
  navigator: NavigatorIOS
}
interface S {
  loaded: boolean,
  packages: ListViewDataSource
}

class List extends Component<P, S> {
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

  showDetail(row: JSCoachDataItem) {
    this.props.navigator.push({
      component: Detail,
      passProps: { item: row },
      title: row.name
    });
  }
  
  renderRow(row: JSCoachDataItem) {
    return (
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
      }}>
        <TouchableHighlight
          underlayColor='#EEE'
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8
          }}
          onPress={this.showDetail.bind(this, row) }>
          <View>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black'
            }}>{row.name}</Text>
            <Text
              ellipsizeMode='tail'
              numberOfLines={1}
              style={{
                color: '#999',
                flexWrap: 'nowrap'
              }}
            >
              {row.description}
            </Text>
          </View>
        </TouchableHighlight>
      </View >
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

export default List;