import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [currentGoal, setCurrentGoal] = useState("");

  function goalInputHandler(enteredText) {
    setCurrentGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoal(currentGoal);

    setCurrentGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="New Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={currentGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={{ ...styles.button, ...styles.addButton }}>
            <Button color="#b180f0" title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={{ ...styles.button, ...styles.cancelButton }}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={props.closeHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    marginRight: 8,
    fontSize: 16,
    borderRadius: 12,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default GoalInput;
