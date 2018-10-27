import React, { Component } from "react";
import Toggle from "../../../library/utils/Toggle";
import * as Routes from "../../../constants";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { listTasks, resetTasks, createTask } from "./actions";

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
  Picker,
  AsyncStorage
} from "react-native";
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardItem from "./CardItem";
import { TextInput } from "react-native-paper";

class FeedScreen extends Component {
	handleCreateTask = this.handleCreateTask.bind(this);

  state = {
    newTitle: "",
    newDescr: "",
    newTopicType: "",
    newEnc: "",
    user: null
  };
  updateType = newType => {
    this.setState({ newTopicType: newType });
  };

	updateEnc = newEnc => {
    this.setState({ newEnc: newEnc });
  };

  static navigationOptions = ({ navigation }) => ({
    title: "Feed",
    headerTitleStyle: {
      color: "white",
      textAlign: "center",
      flex: 1
    },
    headerLeft: <View />,
    headerRight: (
      <View style={{ marginRight: 16 }}>
        <Icon
          name={"map"}
          size={30}
          color={colors.white}
          onPress={() => navigation.navigate("MapScreen")}
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.orange
    }
  });

  componentDidMount = () => {
    const { listTasks } = this.props;
    AsyncStorage.getItem("user")
      .then(res => JSON.parse(res))
      .then(user => {
        listTasks(user.token);
      });
	};
	
	handleCreateTask (callback) {
		const { newTitle, newDescr, newEnc } = this.state;
		const { createTask } = this.props;

		AsyncStorage.getItem("user")
		.then(res => {
			let user = JSON.parse(res);
			navigator.geolocation.getCurrentPosition(pos => {
				const { longitude, latitude } = pos.coords;
				createTask({
					token: user.token,
					title: newTitle,
					category: 1,
					description: newDescr,
					encouragement: newEnc,
					location: [ longitude, latitude ],
					time: 60,
					pay: 10
				});
				callback();
			}) 
		});
	}

  componentWillUnmount = () => {
    const { resetTasks } = this.props;    
    resetTasks();
  };

  navigate = (id) => this.props.navigation.navigate("TaskScreen", { item: id })

  render() {
    const { tasks, tasksLoaded } = this.props;

    if (!tasksLoaded) return <Text>"loading..."</Text>;

    return (
      <View style={styles.container}>
        <Toggle>
          {({ on, toggle }) => (
            <>
              {!on && (
                <TouchableOpacity
                  onPress={() => toggle()}
                  style={[styles.addNewTaskContainer, styles.shadow]}
                >
                  <Text style={styles.addNewText}> Add new task </Text>
                </TouchableOpacity>
              )}

              {on && (
                <View style={[styles.addNewTaskContainer, styles.shadow]}>
                  <TextInput
                    outlined
                    style={{ backgroundColor: colors.white }}
                    maxLenght={45}
                    label="Title"
                    value={this.state.newTitle}
                    onChangeText={newTitle => this.setState({ newTitle })}
                  />

                  <View style={{ flexDirection: "row" }}>
                    <Picker
                      style={{ width: "40%", marginHorizontal: 16 }}
                      selectedValue={this.state.newTopicType}
                      onValueChange={this.updateType}
                    >
                      <Picker.Item label="1" value={1} />
                      <Picker.Item label="2" value={2} />
                      <Picker.Item label="3" value={3} />
                      <Picker.Item label="4" value={4} />
                      <Picker.Item label="5" value={5} />
                      <Picker.Item label="6" value={6} />
                      <Picker.Item label="7" value={7} />
                    </Picker>
                    <Picker
                      style={{ width: "40%", marginRight: 16 }}
                      selectedValue={this.state.newEnc}
                      onValueChange={this.updateEnc}
                    >
                      <Picker.Item label="Paid" value={1} />
                      <Picker.Item label="Barter" value={2} />
                      <Picker.Item label="Volunteer" value={3} />
                    </Picker>
                  </View>

                  <TextInput
                    outlined
                    style={{ backgroundColor: colors.white }}
                    maxLenght={280}
                    label="Short Description (up to 280 chars)"
                    value={this.state.newDescr}
                    onChangeText={newDescr => this.setState({ newDescr })}
                  />
                  <TouchableOpacity
                    onPress={()=>this.handleCreateTask(toggle)}
                    style={styles.addButtonContainer}
                  >
                    <Text style={styles.addHelpText}>Addertr Task</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        </Toggle>
        <FlatList
          data={tasks.result.tasks}
          showsVerticalIndicator={false}
          renderItem={({ item }) => (
            <CardItem
              userPhoto={item.creator.photo}
              onPress={() => this.navigate(item.id)}
              title={item.title}
              userName={item.creator.name}
              userRating={item.creator.rating}
              encourageType={item.encouragement}
              estimatedTime={item.time}
              distance={item.distance}
            />
          )}
          keyExtractor={(x, i) => i.toString()}
          //onEndReached = {()=> this.fetchMoreData()}
          //onEndReachedThreshold = {1}
        />
      </View>
    );
  }
}

const mapState = ({ feed }) => ({
  tasks: feed.tasks,
  tasksLoaded: feed.tasksLoaded
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      listTasks,
      resetTasks,
      createTask
    },
    dispatch
  );

export default connect(
  mapState,
  mapDispatch
)(FeedScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  addNewTaskContainer: {
    backgroundColor: colors.white,
    minHeight: 40,
    maxHeight: 700,
    padding: 8,
    justifyContent: "center"
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
  addNewText: {
    fontWeight: "500",
    fontSize: 17
  },
  friendlyReminderText: {
    fontSize: 17,
    fontWeight: "500"
  },
  addButtonContainer: {
    backgroundColor: colors.orange,
    height: 40,
    margin: 16,
    borderRadius: 18,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  addHelpText: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 17
  }
});
