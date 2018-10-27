import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NoticeComponent = ({type, taskName, rate, name }) => {
    switch(type){
        case(1): //request/decline
            return(
                <View style = {[styles.container, styles.shadow]}>
                    <Text style = {styles.text}>{name} wants to perform your task: {taskName}</Text>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style = {[{backgroundColor: colors.red, }, styles.button]}>
                            <Text style = {{color: colors.white, fontWeight: '500'}}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[{backgroundColor: colors.green}, styles.button]}>
                            <Text style = {{color: colors.white, fontWeight: '500'}}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        case(2): //rate
            return(
                <View style = {[styles.container, styles.shadow]}>
                    <View style = {{flexDirection: "row", alignItems: "center"}}>
                        <Icon name = 'star' color = {colors.orange} size = {45} />
                        <Text style = {{fontSize: 17, color: colors.orange, fontWeight: '500'}}> {rate}</Text>
                    </View>
                    <Text style = {styles.text}>{taskName}</Text>
                </View>
            )
        case(3): //accepted req
            return(
                <View style = {[styles.container, styles.shadow, ]}>
                    <View style = {{flexDirection: "row"}}>
                        <Icon name = 'check-box' size = {24} color = {colors.green}/>
                        <Text style = {styles.text}>{taskName} </Text>
                    </View>
                    <Text style = {styles.text}> by {name}</Text>
           </View>
            )
        case(4): //declined req
            return(
                <View style = {[styles.container, styles.shadow,{ flexDirection: 'row'}]}>
                    <Icon name = 'cancel' size = {24} color = {colors.red}/>
                     <Text style = {styles.text}>{name} canceled perform of your task </Text>
                    
                </View>
            )
        case(5):
            return(
                <View style = {[styles.container, styles.shadow, {flexDirection: "row"}]}>
                    <Text style = {styles.text}>{name} </Text>
                    <Text style = {styles.text}>{taskName}</Text>
                   
                </View>
            )
        
        default:
            return <View><Text>sd</Text></View>;
    }
}

export default NoticeComponent;

const styles = StyleSheet.create({
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
    container:{
        minHeight: 60,
        maxHeight: 120,
        marginHorizontal: 16,
        marginTop: 16,
        padding: 4,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    button:{
        margin: 8,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 45,
        borderRadius: 3
    },
    text:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500'
    }
})