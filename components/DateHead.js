import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead() {
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>2022년 5월 14일</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#e1bee7',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
