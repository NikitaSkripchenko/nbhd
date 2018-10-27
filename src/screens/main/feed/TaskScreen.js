import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTask, resetTask } from './actions';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const BackButton = ({ onPress, style }) => (
  <View style={style}>
    <Icon
      name={"arrow-back"}
      size={30}
      color={colors.white}
      onPress={() => onPress()}
    />
  </View>
);

class TaskScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title, left, header } = appbarStyles;

    return {
      title: "Detailes",
      headerTitleStyle: title,
      headerStyle: header,
      headerLeft: (
        <BackButton onPress={() => navigation.goBack()} style={left} />
      ),
      headerRight: <View />
    };
  };

  componentDidMount = () => {
    const { getTask } = this.props;
    //getTask();
  }
  
  componentWillUnmount = () => {
    const { resetTask } = this.props;
    resetTask();
  };

  render() {
    const { task, taskLoaded } = this.props;

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

mapState = ({ feed }) => ({
  task: feed.task,
  taskLoaded: feed.taskLoaded
});

mapDispatch = dispatch => bindActionCreators({
  getTask,
  resetTask
}, dispatch);

export default connect(mapState, mapDispatch)(TaskScreen);

const appbarStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.orange
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: colors.white
  },
  left: {
    marginHorizontal: 14
  }
});