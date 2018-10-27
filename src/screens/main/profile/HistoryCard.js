import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import colors from "../../../assets/colors";

export default ({message, isAuthor}) => {
  return (
    <View style={styles(isAuthor).card}>
      <Text>
        {message}
      </Text>
    </View>
  )
}

const styles = (isAuthor) => StyleSheet.create({
  card: {
    borderRadius: 3,
    display: flex,
    backgroundColor: colors.white,
    alignSelf: isAuthor ? "right" : "left",
    margin: 10
  }
})