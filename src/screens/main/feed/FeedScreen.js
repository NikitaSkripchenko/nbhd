import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Alert } from 'react-native';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardItem from "./CardItem";
import Toggle from "./Toggle";

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
                        <React.Fragment>
                        { !on && <View onPress ={()=>toggle()}> <Text>open</Text></View>}
                        { on && <View><Text>close</Text></View>}  
                        </React.Fragment>
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
});