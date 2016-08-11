import * as React from 'react';
import { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import * as axios from 'axios';
import Detail from './Detail';
export default class List extends Component {
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
    renderRow(row) {
        return (React.createElement(Row, {item: row, navigator: this.props.navigator}));
    }
    render() {
        return (React.createElement(View, {style: { flex: 1, paddingTop: 62 }}, this.state.loaded
            ? React.createElement(ListView, {enableEmptySections: true, dataSource: this.state.packages, renderRow: this.renderRow.bind(this)})
            : React.createElement(ActivityIndicator, {animating: true, size: 'large'})));
    }
}
class Row extends Component {
    showDetail() {
        const item = this.props.item;
        this.props.navigator.push({
            component: Detail,
            passProps: { item },
            title: item.name
        });
    }
    render() {
        const item = this.props.item;
        return (React.createElement(View, {style: styles.rowWrapper}, React.createElement(TouchableHighlight, {underlayColor: '#EEE', style: styles.paddingWrapper, onPress: this.showDetail.bind(this, item)}, React.createElement(View, null, React.createElement(Text, {style: styles.primaryText}, item.name), React.createElement(Text, {ellipsizeMode: 'tail', numberOfLines: 1, style: styles.secondaryText}, item.description)))));
    }
}
const styles = StyleSheet.create({
    rowWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    },
    paddingWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    primaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    secondaryText: {
        color: '#999',
        flexWrap: 'nowrap'
    }
});
