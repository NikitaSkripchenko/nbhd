import React, { Component } from "react";
import PropTypes from "prop-types";

import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { white } from "../../../assets/colors/colors";

const SettingsButton = ({ onPress, style }) => (
  <View style={style}>
    <Icon
      name={"settings"}
      size={30}
      color={white}
      onPress={() => onPress()}
    />
  </View>
);

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title, left, right } = appbarStyles;

    return {
      title: "Profile",
      headerTitleStyle: title,
      headerRight: (<SettingsButton onPress={() => navigation.navigate("")} style={right}/>)
    };
  };

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { header, history } = styles;

    return (
      <View>
        <View style={header}>
          <Text>Header here</Text>
        </View>
        <View style={history}>
          <Text>List of actyviry here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  history: {}
});

const appbarStyles = {
  title: {},
  right: { 
    marginHorizontal: 14
  }
};
