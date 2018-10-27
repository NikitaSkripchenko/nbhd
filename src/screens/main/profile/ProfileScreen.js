import React, { Component } from "react";
import PropTypes from "prop-types";

import { Text, View, StyleSheet, FlatList, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import colors from "../../../assets/colors/colors";
import HistoryCard from "./HistoryCard";

const test = [
  {
    message: "Message",
    isAuthor: true
  },
  {
    message: "Message",
    isAuthor: false
  },
  {
    message: "Message",
    isAuthor: false
  },
  {
    message: "Message",
    isAuthor: false
  },{
    message: "Message",
    isAuthor: false
  },{
    message: "Message",
    isAuthor: false
  },
  {
    message: "Message",
    isAuthor: true
  }
];

const SettingsButton = ({ onPress, style }) => (
  <View style={style}>
    <Icon
      name={"settings"}
      size={30}
      color={colors.white}
      onPress={() => onPress()}
    />
  </View>
);

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title, right, header } = appbarStyles;

    return {
      title: "Profile",
      headerTitleStyle: title,
      headerStyle: header,
      headerRight: (
        <SettingsButton onPress={() => navigation.navigate("")} style={right} />
      ),
      headerLeft: <View />
    };
  };

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const {
      shadow,
      headerContainer,
      profileImageContainer,
      userInfoContainer,
      ratingContainer,
      uNameCaption,
      history
    } = styles;

    return (
      <View style={styles.main}>
        <View style={[headerContainer, shadow]}>
          <View style={profileImageContainer}>
            <Text>I</Text>
          </View>
          <View style={userInfoContainer}>
            <View style={uNameCaption}>
              <Text style={styles.uName}>Hello Dude</Text>
            </View>
            <View style={ratingContainer}>
              <Icon name={"star"} size={24} color={colors.orange} />
              <Text>4.4</Text>
            </View>
          </View>
        </View>
        <View style={history}>
          <FlatList
            data={test}
            showsVerticalIndicator={false}
            renderItem={({ item }) => (
              <HistoryCard message={item.message} isAuthor={item.isAuthor} />
            )}
            keyExtractor={(x, i) => i.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.background,
    flex: 1
  },
  headerContainer: {
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    padding: 15
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray"
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  uNameCaption: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  uName: {
    fontSize: 17,
    fontWeight: "500"
  },
  ratingContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowColor: colors.FitBlack,
        shadowOffset: { height: 3, width: 3 }
      },
      android: {
        elevation: 3
      }
    })
  },
  history: {
  }
});

const appbarStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.orange
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: colors.white
  },
  right: {
    marginHorizontal: 14
  }
});
