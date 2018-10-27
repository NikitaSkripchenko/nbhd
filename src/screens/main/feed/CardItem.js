import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Platform, TouchableOpacity  } from 'react-native'
import PropTypes from 'prop-types';
import colors from "../../../assets/colors/colors";
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as enTypes from "../../../constants/encourageTypes";
import * as disTypes from "../../../constants/distanceTypes";

const getEncourageType = {
    [enTypes.PAID]: "Paid",
    [enTypes.BARTER]: "Barter",
    [enTypes.VOLUNTEER]: "Volunteer"
}

const getDistance = {
    [disTypes.UP_TO_250]: "up to 250m",
    [disTypes.UP_TO_500]: "up to 500m",
    [disTypes.UP_TO_1000]: "up to 1km"
}

const CardItem = ({
    photoUrl, 
    userName, 
    userRating, 
    title,
    distance,
    estimatedTime,
    encourageType
}) => {

    return (
        <TouchableOpacity onPress = {()=> this.props.onPress()}style = {[styles.shadow, styles.container ]}>


            <View style = {styles.userContainer}>
                <Image source={photoUrl}
                    style={styles.image}/>
                <Text style = {styles.textName}>{userName}</Text>
                    <View style ={styles.ratingContainer}>
                        <Icon name = 'star' color = {colors.orange} size = {24}/>
                        <Text style ={styles.text} >{userRating}</Text>
                    </View>
            </View>

            <View style = {styles.infoContainer}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}> {title} </Text>
                </View>

                <View style={{alignItems: 'flex-start'}}>
                    <Text style = {styles.text}>{getDistance[distance]}</Text>
                    <Text style = {styles.text}>Estimated time: {estimatedTime}</Text>
                    <View style = {styles.encourageContainer}>
                        <Text style={styles.text}>{getEncourageType[encourageType]}</Text>
                    </View>
                </View>
                
            </View>

        </TouchableOpacity>
    )
};



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
    container: {
        padding: 8,
        marginTop: 15,
        marginBottom: 1,
        marginHorizontal: 16,
        maxHeight: 120,
        minHeight: 90,
        borderRadius: 3,
        backgroundColor: colors.white,
        flexDirection: 'row',
        display: 'flex'

    },
    text:{
        fontWeight: '500',
        color: colors.orange,
        textAlign: 'center'
    },
    textName:{
        color: colors.orange,
        textAlign: 'center'
    },
    ratingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: "center"
    },
    image:{
        height: 50,
        width: 50
    },
    userContainer:{
        borderRightWidth: 1,
        borderRightColor: colors.orange,
        alignItems: 'center',
        paddingRight: 8,
        width: 100
    },
    titleContainer:{
        width: '100%',
        alignItems: "center",
        alignContent: 'center',
        
        // flexDirection: 'row',
       
    },
    titleText:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500'
    },
    infoContainer:{
        paddingLeft: 8,
    },
    encourageContainer:{
        marginTop: 16
    },
});

export default CardItem;