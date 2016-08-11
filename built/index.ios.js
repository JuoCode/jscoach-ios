import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, NavigatorIOS, ListView, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import List from './components/List';
export default class App extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            open: false,
            packages: ds.cloneWithRows([])
        };
    }
    showMenu() {
        this.setState({ open: true });
    }
    render() {
        return (React.createElement(SideMenu, {isOpen: this.state.open, menu: React.createElement(View, null, 
            React.createElement(Text, null, "Menu")
        )}, 
            React.createElement(NavigatorIOS, {initialRoute: {
                component: List,
                title: 'JS.Coach',
                leftButtonTitle: 'Category',
                onLeftButtonPress: this.showMenu.bind(this)
            }, style: { flex: 1 }})
        ));
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
