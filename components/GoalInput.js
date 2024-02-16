import {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Modal, Image} from 'react-native';

const GoalInput = props => {
  const [inputText, setInputText] = useState('');

  function addGoal() {
    props.onAddGoal(inputText);
    setInputText('');
  }
  function changeInput(text) {
    setInputText(text);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assests/images/goalImg.png')}></Image>
        <TextInput
          onChangeText={changeInput}
          placeholder="Enter Goal"
          style={styles.textInput}
          value={inputText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    color: 'black',
    padding: 8,
  },
  inputContainer: {
    backgroundColor: '#311b6b',
    padding: 16,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: '30%',
  },
});
