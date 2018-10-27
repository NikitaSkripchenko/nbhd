import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import NoticeComponent from './NoticeComponent';
import colors from "../../../assets/colors/colors";

export default class NoticeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Notice',
    headerTitleStyle: {
      color: 'white',
      textAlign: "center",
      flex: 1,
    },
    headerStyle: {
      backgroundColor: colors.orange,
    },
  });

  state = {
    data: [
      {
        //type, taskName, rate, name
        type: 1,
        name: 'Name Surname',
        taskName: "Name of Task",
      },
      {
        type: 2,
        rate: 123,
        taskName: "Walk with my dog",
      },
      {
        type: 3,
        taskName: "You accepted by as a performer",
        name: 'Doug'
      },
      {
        type: 4,
        taskName: "Name of Task#2",
        name: "Doug"
      },
      {
        type: 5,
        taskName: "mark your task as done",
        name: 'Anna',
      },


    ]
  }

  _renderItem = ({ item }) => {
    return (
      <NoticeComponent
        type={item.type}
        taskName={item.taskName}
        rate={item.rate}
        name={item.name} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          showsVerticalIndicator={false}
          renderItem={this._renderItem}
          keyExtractor={(x, i) => i.toString()}
        //onEndReached = {()=> this.fetchMoreData()}
        //onEndReachedThreshold = {1}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

