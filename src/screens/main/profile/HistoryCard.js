import React from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';
import colors from "../../../assets/colors/colors";


export default ({message, isAuthor}) => {
  const { card, shadow } = styles(isAuthor);
  return (
    <View style={[card, shadow]}>
      <Text>
        {message}
      </Text>
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
    padding: 20
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