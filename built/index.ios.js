import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, NavigatorIOS, ListView } from 'react-native';
import List from './components/List';
export default class App extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            packages: ds.cloneWithRows([])
        };
    }
    render() {
        return (React.createElement(NavigatorIOS, {initialRoute: {
            component: List,
            title: 'JSCoach'
        }, style: { flex: 1 }}));
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
