import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Alert, TouchableOpacity, Platform} from 'react-native';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardItem from "./CardItem";
import Toggle from "../../../library/utils/Toggle";
import * as Routes from "../../../constants";
export default class FeedScreen extends Component {

    state = {
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
                <Icon name={'map'} size={30} color={colors.white} onPress={() => Alert.alert("Hi")}/>
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

    // fetchMoreData = async() => {

    // };

    render() {
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
                            <View>
                                <Text>close</Text>
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

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
    },
    addNewTaskContainer:{
        backgroundColor: colors.white,
        minHeight: 40,
        padding: 4,
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
});