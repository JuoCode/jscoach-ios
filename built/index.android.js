/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
class HelloRN extends React.Component {
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(Text, {style: styles.welcome}, "Welcome to React Native!"), React.createElement(Text, {style: styles.instructions}, "To get started, edit index.android.js"), React.createElement(Text, {style: styles.instructions}, "Double tap R on your keyboard to reload,", '\n', "Shake or press menu button for dev menu")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('HelloRN', () => HelloRN);
