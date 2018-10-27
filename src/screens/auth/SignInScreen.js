import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput } from "react-native-paper";
import { FEED_ROUTE } from "../../constants/routes";
import colors from "../../assets/colors/colors";
import { signIn } from "./session";

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    phone: "",
    password: ""
  };

  handleSignIn(){
    const { phone, password } = this.state;
    const { navigate } = this.props.navigation;

    console.log("yay");
    signIn({ phone, password }).then(res => {
      console.log(res);
      if (res.status) {
        AsyncStorage.setItem("user", JSON.stringify(res.result))
        .then(() =>
          navigate(FEED_ROUTE)
        );
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          outlined
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            marginHorizontal: 8
          }}
          maxLenght={13}
          label="Phone"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <TextInput
          outlined
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            marginHorizontal: 8
          }}
          maxLenght={16}
          secureTextEntry
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          onPress={() => this.handleSignIn()}
          style={styles.signUpButton}
        >
          <Text style={styles.text}> SIGN IN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    backgroundColor: colors.background
  },
  signUpButton: {
    backgroundColor: colors.orange,
    borderRadius: 9,
    height: 40,
    margin: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "500"
  }
});
