import * as React from 'react';
import { Component } from 'react';
import { View, Text, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import * as axios from 'axios';
import Detail from './Detail';
class List extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            loaded: false,
            packages: ds.cloneWithRows([])
        };
    }
    componentDidMount() {
        axios.get('https://js.coach/react.json?')
            .then(resp => this.setState({
            loaded: true,
            packages: this.state.packages.cloneWithRows(resp.data.packages)
        }));
    }
    showDetail(row) {
        this.props.navigator.push({
            component: Detail,
            passProps: { item: row },
            title: row.name
        });
    }
    renderRow(row) {
        return (React.createElement(View, {style: {
            borderBottomWidth: 1,
            borderBottomColor: '#EEE'
        }}, React.createElement(TouchableHighlight, {underlayColor: '#EEE', style: {
            paddingHorizontal: 16,
            paddingVertical: 8
        }, onPress: this.showDetail.bind(this, row)}, React.createElement(View, null, React.createElement(Text, {style: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black'
        }}, row.name), React.createElement(Text, {ellipsizeMode: 'tail', numberOfLines: 1, style: {
            color: '#999',
            flexWrap: 'nowrap'
        }}, row.description)))));
    }
    render() {
        return (React.createElement(View, {style: { flex: 1, paddingTop: 62 }}, this.state.loaded
            ? React.createElement(ListView, {enableEmptySections: true, dataSource: this.state.packages, renderRow: this.renderRow.bind(this)})
            : React.createElement(ActivityIndicator, {animating: true, size: 'large'})));
    }
}
export default List;
