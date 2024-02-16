import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

function App(): React.JSX.Element {
  const [goal, setGoal] = useState([]);

  function filter(id) {
    setGoal(p => {
      return p.filter(curr => curr.id !== id);
    });
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
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={submitGoal} />
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
    flex: 6,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

export default App;
