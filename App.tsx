import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, Button, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

function App(): React.JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goal, setGoal] = useState([]);

  function filter(id) {
    setGoal(p => {
      return p.filter(curr => curr.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endModalHandler() {
    setModalIsVisible(false);
  }

  function submitGoal(text: string) {
    // setGoal((p) => [...p, inputText]);

    //flat list will look for key properti
    setGoal(p => [
      ...p,
      {
        text: text,
        id: Math.random().toString(),
      },
    ]);
    setModalIsVisible(false);
  }
  return (
    <View style={styles.container}>
      <Button
        title="Add a new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onCancel={endModalHandler}
        onAddGoal={submitGoal}
      />
      <View style={styles.goalList}>
        <FlatList
          data={goal}
          renderItem={itemData => {
            return (
              <GoalItem
                filter={filter}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalList: {
    marginTop: 16,
    flex: 6,
  },
  container: {
    flex: 1,

    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
});

export default App;
