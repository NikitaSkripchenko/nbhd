import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "./actions";

import { Text, View, StyleSheet, FlatList, Platform, Image, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import colors from "../../../assets/colors/colors";
import HistoryCard from "./HistoryCard";
import { bindActionCreators } from "redux";

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

class ProfileScreen extends Component {
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

  componentDidMount(){
    const { getUser } = this.props;
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then(user => {
      getUser(user);
    })
  }
  

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

    const { user, userLoaded } = this.props;

    if(!userLoaded) return (<Text>Loading....</Text>)

    return (
      <View style={styles.main}>
        <View style={[headerContainer, shadow]}>
          <Image source = {{uri:user.photo}} 
                style = {profileImageContainer}/>
          <View style={userInfoContainer}>
            <View style={uNameCaption}>
              <Text style={styles.uName}>{user.name}</Text>
            </View>
            <View style={ratingContainer}>
              <Icon name={"star"} size={24} color={colors.orange} />
              <Text>{user.rating}</Text>
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

const mapState = ({ profile }) => ({
  user: profile.user,
  userLoaded: profile.userLoaded
})

const mapDispatch = dispatch => bindActionCreators({
  getUser
}, dispatch)

export default connect(mapState, mapDispatch)(ProfileScreen)

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
