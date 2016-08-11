import * as React from 'react';
import { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameFocus: false,
            passwordFocus: false
        };
    }
    render() {
        return (React.createElement(View, {style: styles.container}, 
            React.createElement(View, {style: styles.banner}), 
            React.createElement(View, {style: styles.formWrapper}, 
                React.createElement(View, {style: [styles.inputWrapper, this.state.usernameFocus && styles.inputWrapperFocus]}, 
                    React.createElement(Icon, {name: "user", size: 30}), 
                    React.createElement(TextInput, {style: [styles.input, { fontWeight: 'bold' }], keyboardType: "email-address", autoCapitalize: "none", placeholder: "Username", autoCorrect: false, returnKeyType: 'done', onFocus: () => this.setState({ usernameFocus: true }), onBlur: () => this.setState({ usernameFocus: false })})), 
                React.createElement(View, {style: [styles.inputWrapper, this.state.passwordFocus && styles.inputWrapperFocus]}, 
                    React.createElement(Icon, {name: "key", size: 30}), 
                    React.createElement(TextInput, {style: styles.input, password: true, placeholder: "Password", autoCorrect: false, returnKeyType: 'done', onFocus: () => this.setState({ passwordFocus: true }), onBlur: () => this.setState({ passwordFocus: false })})))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        height: 180,
        backgroundColor: 'rgb(120,45,230)'
    },
    formWrapper: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        marginLeft: 18,
        alignSelf: 'auto',
        width: 200,
        height: 30
    },
    username: {
        fontWeight: 'bold'
    },
    inputWrapper: {
        width: 280,
        paddingBottom: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 2,
        borderBottomColor: '#eee'
    },
    inputWrapperFocus: {
        borderBottomColor: 'rgb(120,45,230)'
    }
});
