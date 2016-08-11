import * as React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ViewStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';
import Colors from '../constants/colors'
interface S {
  usernameFocus: boolean,
  passwordFocus: boolean,
  uwAV: Animated.Value,
  pwAV: Animated.Value
}

export default class Login extends Component<any, S> {
  constructor() {
    super();
    this.state = {
      usernameFocus: false,
      uwAV: new Animated.Value(0),
      passwordFocus: false,
      pwAV: new Animated.Value(0)

    }
  }
  render() {
    const usernameWrapperStyle = this.state.uwAV.interpolate({
      inputRange: [0, 300],
      outputRange: ['#eee', Colors.PURPLE]
    })
    const passwordWrapperStyle = this.state.pwAV.interpolate({
      inputRange: [0, 300],
      outputRange: ['#eee', Colors.PURPLE]
    })
    return (
      <View style={styles.container}>
        <View style={styles.banner} />

        <View style={styles.formWrapper}>
          <Animated.View style={[styles.inputWrapper, { borderBottomColor: usernameWrapperStyle }]}>
            <Icon name="user" size={18} color={Colors.PURPLE} />
            <TextInput
              style={[styles.input, { fontWeight: 'bold' }]}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Username"
              autoCorrect={false}
              returnKeyType='done'
              onFocus={() => Animated.spring(this.state.uwAV, { toValue: 300 }).start()}
              onBlur={() => Animated.spring(this.state.uwAV, { toValue: 0 }).start()}
            />
          </Animated.View>
          <Animated.View style={[styles.inputWrapper, { borderBottomColor: passwordWrapperStyle }]}>
            <Icon name="key" size={18} color={Colors.PURPLE} />
            <TextInput
              style={styles.input}
              password={true}
              placeholder="Password"
              autoCorrect={false}
              returnKeyType='done'
              onFocus={() => Animated.spring(this.state.pwAV, { toValue: 300 }).start()}
              onBlur={() => Animated.spring(this.state.pwAV, { toValue: 0 }).start()}
            />
          </Animated.View>
          
          <Button style={styles.loginButton}>LOGIN</Button>
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
    backgroundColor: Colors.PURPLE
  } as ViewStyle,
  formWrapper: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center'
  } as ViewStyle,
  input: {
    flex: 1,
    marginLeft: 12,
    alignSelf: 'auto',
    width: 200,
    height: 30,
    color: Colors.PURPLE
  } as ViewStyle,
  username: {
    fontWeight: 'bold'
  } as ViewStyle,
  inputWrapper: {
    width: 280,
    paddingBottom: 6,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  } as ViewStyle,
  inputWrapperFocus: {
    borderBottomColor: Colors.PURPLE
  } as ViewStyle,
  loginButton: {
    marginTop: 40,
    color: Colors.PURPLE
  } as ViewStyle
})