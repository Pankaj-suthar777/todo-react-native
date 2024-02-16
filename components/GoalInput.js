import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const GoalInput = (props) => {
  const [inputText, setInputText] = useState("");

  function addGoal() {
    props.onAddGoal(inputText);
    setInputText("");
  }
  function changeInput(text) {
    setInputText(text);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={changeInput}
        placeholder="Enter Goal"
        style={styles.textInput}
        value={inputText}
      ></TextInput>
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    marginBottom: 20,
  },
});
