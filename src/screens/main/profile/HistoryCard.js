import React from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';
import colors from "../../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default ({message, isAuthor}) => {
  const { card, shadow } = styles(isAuthor);
  return (
    <View style={[card, shadow]}>
      <Text>
          Elma perform task by Anna
      </Text>
      <View style = {{flexDirection: 'row'}}>
        <Icon name = 'star' size = {24} color ={colors.orange}/>
        <Text style = {{fontSize: 17, color: colors.orange}}>4.6</Text>
      </View>
    </View>
  )
}

const styles = (isAuthor) => StyleSheet.create({
  card: {
    borderRadius: 3,
    display: "flex",
    backgroundColor: colors.white,
    alignSelf: isAuthor ? "flex-start" : "flex-end",
    margin: 10,
    padding: 20,
    minWidth: 250
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
})