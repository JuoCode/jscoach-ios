import * as React from 'react';
import { Component } from 'react';
import { View, TextInput, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';
import Colors from '../constants/colors';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameFocus: false,
            uwAV: new Animated.Value(0),
            passwordFocus: false,
            pwAV: new Animated.Value(0)
        };
    }
    render() {
        const usernameWrapperStyle = this.state.uwAV.interpolate({
            inputRange: [0, 300],
            outputRange: ['#eee', Colors.PURPLE]
        });
        const passwordWrapperStyle = this.state.pwAV.interpolate({
            inputRange: [0, 300],
            outputRange: ['#eee', Colors.PURPLE]
        });
        return (React.createElement(View, {style: styles.container}, React.createElement(View, {style: styles.banner}), React.createElement(View, {style: styles.formWrapper}, React.createElement(Animated.View, {style: [styles.inputWrapper, { borderBottomColor: usernameWrapperStyle }]}, React.createElement(Icon, {name: "user", size: 18, color: Colors.PURPLE}), React.createElement(TextInput, {style: [styles.input, { fontWeight: 'bold' }], keyboardType: "email-address", autoCapitalize: "none", placeholder: "Username", autoCorrect: false, returnKeyType: 'done', onFocus: () => Animated.spring(this.state.uwAV, { toValue: 300 }).start(), onBlur: () => Animated.spring(this.state.uwAV, { toValue: 0 }).start()})), React.createElement(Animated.View, {style: [styles.inputWrapper, { borderBottomColor: passwordWrapperStyle }]}, React.createElement(Icon, {name: "key", size: 18, color: Colors.PURPLE}), React.createElement(TextInput, {style: styles.input, password: true, placeholder: "Password", autoCorrect: false, returnKeyType: 'done', onFocus: () => Animated.spring(this.state.pwAV, { toValue: 300 }).start(), onBlur: () => Animated.spring(this.state.pwAV, { toValue: 0 }).start()})), React.createElement(Button, {style: styles.loginButton}, "LOGIN"))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        height: 180,
        backgroundColor: Colors.PURPLE
    },
    formWrapper: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        marginLeft: 12,
        alignSelf: 'auto',
        width: 200,
        height: 30,
        color: Colors.PURPLE
    },
    username: {
        fontWeight: 'bold'
    },
    inputWrapper: {
        width: 280,
        paddingBottom: 6,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#eee'
    },
    inputWrapperFocus: {
        borderBottomColor: Colors.PURPLE
    },
    loginButton: {
        marginTop: 40,
        color: Colors.PURPLE
    }
});
