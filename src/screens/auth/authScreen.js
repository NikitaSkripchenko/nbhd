import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, } from 'react-native-paper';
import colors from '../../assets/colors/colors';

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    phone: "",
    name: "",
    password: ""
  }

  goToSignIn() {
    const { navigate } = this.props.navigation;
    navigate("SignInScreen");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={
            {
              height: 200,
              width: 200,
              alignSelf: 'center'
            }
          }
          source={
            require('../../assets/images/logo.png')}
        />
        <TextInput
          outlined
          style={{ backgroundColor: "rgba(255,255,255,0)", marginHorizontal: 8 }}
          maxLenght={13}
          label='Phone'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })} />
        <TextInput
          outlined
          style={{ backgroundColor: "rgba(255,255,255,0)", marginHorizontal: 8 }}
          maxLenght={16}
          label='Password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })} />
        <TextInput
          outlined
          style={{ backgroundColor: "rgba(255,255,255,0)", marginHorizontal: 8 }}
          maxLenght={43}
          label='Name and Surname'
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TouchableOpacity
          onPress={() => console.log(12)}
          style={styles.signUpButton}>
          <Text style={styles.text}> SIGN UP </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", position: "absolute", bottom: 10, alignSelf: "center", alignItems: 'center' }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.goToSignIn()}
            style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 17 }}>SIGN IN</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: colors.background
  },
  signUpButton: {
    backgroundColor: colors.orange,
    borderRadius: 9,
    height: 40,
    margin: 16,
    alignItems: 'center',
    justifyContent: "center"
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "500"
  },
});