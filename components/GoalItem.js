import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalText}>
      <Pressable
        android_ripple={{color: '#red'}}
        onPress={props.filter.bind(this, props.id)}>
        <Text style={styles.textOfGoal}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    borderRadius: 5,
    backgroundColor: 'salmon',
    marginBottom: 5,
  },
  textOfGoal: {
    padding: 8,
    color: 'white',
  },
});
