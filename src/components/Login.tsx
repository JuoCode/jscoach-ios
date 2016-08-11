import * as React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component<any, any> {
  constructor() {
    super();
    this.state = {
      usernameFocus: false,
      passwordFocus: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner} />

        <View style={styles.formWrapper}>
          <View style={[styles.inputWrapper, this.state.usernameFocus && styles.inputWrapperFocus]}>
            <Icon name="user" size={30} />
            <TextInput
              style={[styles.input, { fontWeight: 'bold' }]}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Username"
              autoCorrect={false}
              returnKeyType='done'
              onFocus={() => this.setState({ usernameFocus: true })}
              onBlur={() => this.setState({ usernameFocus: false })}
            />
          </View>
          <View style={[styles.inputWrapper, this.state.passwordFocus && styles.inputWrapperFocus]}>
            <Icon name="key" size={30} />
            <TextInput
              style={styles.input}
              password={true}
              placeholder="Password"
              autoCorrect={false}
              returnKeyType='done'
              onFocus={() => this.setState({ passwordFocus: true })}
              onBlur={() => this.setState({ passwordFocus: false })}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } as ViewStyle,
  banner: {
    height: 180,
    backgroundColor: 'rgb(120,45,230)'
  } as ViewStyle,
  formWrapper: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center'
  } as ViewStyle,
  input: {
    flex: 1,
    marginLeft: 18,
    alignSelf: 'auto',
    width: 200,
    height: 30
  } as ViewStyle,
  username: {
    fontWeight: 'bold'
  } as ViewStyle,
  inputWrapper: {
    width: 280,
    paddingBottom: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  } as ViewStyle,
  inputWrapperFocus: {
    borderBottomColor: 'rgb(120,45,230)'
  } as ViewStyle
})