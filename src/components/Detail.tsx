import * as React from 'react';
import { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ViewStyle, WebView } from 'react-native';

import * as axios from 'axios';
import { JSCoachDataItem } from './index.d'; 

interface S {
  loaded: boolean,
  detail?: JSCoachDataItem
}

export default class Detail extends Component<any, any> {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    const { name } = this.props.item
    axios.get(`https://js.coach/react/${name}.json`)
      .then(resp => {
        const detail = (resp.data as JSCoachDataItem)
        this.setState({ detail, loaded: true });
        console.log('loaded');
      })
      .catch(err => console.error(err))
  }

  // wrapHtml(body: string) {
  //   return [
  //     '<!DOCTYPE html>',
  //     '<html lang="en">',
  //     '<head>',
  //     '  <meta charset="UTF-8">',
  //     '  <title>Document</title>',
  //     '</head>',
  //     body,
  //     '</html>',
  //   ].join('')
  // }
  
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 62 }}>
        {this.state.loaded
          ? <WebView
              source={{ html: this.state.detail.readme }}
            />
          : <ActivityIndicator animating={true} size='large' />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  } as ViewStyle,
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});