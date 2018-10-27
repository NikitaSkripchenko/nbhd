import React, { Component } from 'react';
import Toggle from "../../../library/utils/Toggle";
import * as Routes from "../../../constants";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listTasks, resetTasks, createTask } from './actions';

import { Text, View, FlatList, StyleSheet, Alert, TouchableOpacity, Platform, Picker} from 'react-native';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardItem from "./CardItem";
import {TextInput} from "react-native-paper";

class FeedScreen extends Component {
    state = {
        newTitle: '',
        newDescr: '',
        newTopicType: '',
        newDescr: '',
        data: [
            {
                photoUrl: require('../../../assets/images/userPic.png'),
                userName: "Anna IDINAHIOOY",
                userRating: 5,
                encourageType: 1,
                estimatedTime: '3 hours',
                title: 'title',
                distance: 1,

            },
            {
                photoUrl: require('../../../assets/images/userPic.png'),
                userName: "Anna",
                userRating: 4.8,
                encourageType: 2,
                estimatedTime: '4 hours',
                title: 'title2',
                distance: 2,
                 
            },
        ]
    };
    updateType = (newType) => {
        this.setState({ newType: newType })
    };

    static navigationOptions = ({navigation}) => ({
        title: 'Feed',
        headerTitleStyle: {
            color: 'white',
            textAlign: "center",
            flex: 1,
        },
        headerLeft:(
            <View/>
        ),
        headerRight: (
            <View style={{marginRight: 16}}>
                <Icon name={'map'} size={30} color={colors.white} onPress={() => navigation.navigate('MapScreen')}/>
            </View>
        ),
        headerStyle: {
            backgroundColor: colors.orange,
        },
    });

    renderData = () => {

    }
    _renderItem = ({item}) => {
        return(
            <CardItem 
                onPress={()=>navigation.navigate('TASK_ROUTE', {item: item.id})}
                title={item.title}
                photoUrl={item.photoUrl}
                userName ={item.userName}
                userRating={item.userRating}
                encourageType={item.encourageType}
                estimatedTime={item.estimatedTime}
                distance={item.distance}
                />
        )
    };

    componentDidMount = () => {
        const { listTasks } = this.props;
        listTasks("token");
    }
    
    componentWillUnmount = () => {
        const { resetTasks } = this.props;
        resetTasks();
    }

    // fetchMoreData = async() => {

    // };
    addHelp(){

    }

    render() {
        const { tasks, tasksLoaded } = this.props;

        if(!tasksLoaded) return <Text>loading</Text>;

        return (
            <View style = {styles.container}>  
                <Toggle>
                    {({on, toggle})=>(
                        <>
                        { !on && 
                            <TouchableOpacity onPress ={()=>toggle()}
                            style={[styles.addNewTaskContainer, styles.shadow]}>
                                     <Text style ={styles.addNewText}> Add new task </Text>
                            </TouchableOpacity>}

                        { on && 
                            <View style={[styles.addNewTaskContainer, styles.shadow]}>
                                <TextInput 
                                    outlined
                                    style = {{backgroundColor: colors.white}}
                                    maxLenght = {45}
                                    label = 'Title'
                                    value={this.state.newTitle}
                                    onChangeText={newTitle => this.setState({ newTitle })}
                                    />

                                <View style = {{flexDirection: 'row'}}>
                                <Picker style = {{width: '40%',  marginHorizontal: 16}} selectedValue = {this.state.newTopicType} onValueChange = {this.updateType}>
                                    <Picker.Item label = "Topic1" value = {1} />
                                    <Picker.Item label = "2" value = {2} />
                                    <Picker.Item label = "3" value = {3} />
                                    <Picker.Item label = "4" value = {4} />
                                    <Picker.Item label = "5" value = {5} />
                                    <Picker.Item label = "6" value = {6} />
                                    <Picker.Item label = "7" value = {7} />
                                </Picker>
                                <Picker style = {{width: '40%',  marginRight: 16}} selectedValue = {this.state.newTopicType} onValueChange = {this.updateType}>
                                    <Picker.Item label = "Paid" value = {1} />
                                    <Picker.Item label = "Barter" value = {2} />
                                    <Picker.Item label = "Volunteer" value = {3} />
                                </Picker>
                                </View>

                                <TextInput 
                                    outlined
                                    style = {{backgroundColor: colors.white}}
                                    maxLenght = {280}
                                    label = 'Short Description (up to 280 chars)'
                                    value={this.state.newDescr}
                                    onChangeText={newDescr => this.setState({ newDescr })}
                                    />
                                
                                
                                <TouchableOpacity 
                                    onPress = {()=> this.addHelp()}
                                    style = {styles.addButtonContainer}>
                                    <Text style = {styles.addHelpText}>Add Task</Text>

                                </TouchableOpacity>
                            </View>
                        }
                        </>
                    )}
                </Toggle>
                <FlatList
                    data={this.state.data}
                    showsVerticalIndicator={false}
                    renderItem= {this._renderItem}
                    keyExtractor = {(x,i) => i.toString()}
                    //onEndReached = {()=> this.fetchMoreData()}
                    //onEndReachedThreshold = {1}
                />
            </View>
        )
    }
}

const mapState = ({ feed }) => ({
    tasks: feed.tasks,
    tasksLoaded: feed.tasksLoaded 
});

const mapDispatch = dispatch = bindActionCreators({
    listTasks,
    resetTasks, 
    createTask
}, dispatch)

export default connect(mapState, mapDispatch)(FeedScreen);

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
    },
    addNewTaskContainer:{
        backgroundColor: colors.white,
        minHeight: 40,
        maxHeight: 700,
        padding: 8,
        justifyContent: 'center'
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowColor: colors.FitBlack,
                shadowOffset: { height: 3, width: 3 },

            },
            android:{
                elevation: 3,
            }
        }),
    },
    addNewText:{
        fontWeight: '500',
        fontSize: 17,
    },
    friendlyReminderText:{
        fontSize: 17,
        fontWeight: '500'
    },
    addButtonContainer:{
        backgroundColor: colors.orange,
        height: 40,
        margin: 16,
        borderRadius: 18,
        alignContent: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
    addHelpText:{
        color: colors.white,
        fontWeight: '500',
        fontSize: 17
    },

});