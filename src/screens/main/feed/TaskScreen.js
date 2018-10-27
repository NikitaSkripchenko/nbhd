import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTask, resetTask } from './actions';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

import {distance} from "../../../constants/distanceTypes";
import {encouragement} from '../../../constants/encouragement';
import { Text, View, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native'

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
		//console.log(1);
		AsyncStorage.getItem('user')
			.then(res => JSON.parse(res))
			.then(user => {
				console.log(user);
				getTask({
					token: user.token,
					id: this.props.navigation.state.params.item,
				})
			})


	}

	componentWillUnmount = () => {
		const { resetTask } = this.props;
		resetTask();
	};

	render() {
		const { task, taskLoaded } = this.props;
		if (!taskLoaded) { return <Text>loading</Text> }
		const { result } = task;
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '500' }}> {result.title} </Text>
				<View style ={{flexDirection: 'row' ,alignItems: "center"}}>

					<Image
						style={{ height: 70, width: 70, borderRadius: 35, marginRight: 16 }}
						source={{ uri: result.creator.photo }} />
					<View>
					<Text>{result.creator.name}</Text>
					<View style={{ flexDirection: 'row' }}>
						<Icon name='star' size={18} color={colors.orange} />
						<Text>{result.creator.rating}</Text>
					</View>
					</View>

				</View>
				<View style = {{marginTop: 16}}>
					<Text style ={styles.description}>{result.description}</Text>
				</View>
				<View style= {{flexDirection: 'row', marginVertical: 32}}>
					<Icon name = "location-on" size = {24} />
					<Text style = {styles.description}>{distance[result.distance]}</Text>
				</View>

				<Text style = {styles.description}>{encouragement[result.encouragement]}</Text>
				<TouchableOpacity
                    style={styles.addButtonContainer}>
                    <Text style={styles.addHelpText}>Perform!</Text>
                  </TouchableOpacity>
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

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		flex: 1,
		padding: 16,
	},
	description:{
		fontSize: 17,
		
	},
	addButtonContainer: {
		marginTop: 32,
		backgroundColor: colors.green,
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
})