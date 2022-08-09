import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(newGoal) {
    setGoals((prev) => {
      return [...prev, { text: newGoal, id: Math.random().toString() }];
    });
    addGoalEndHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  function addGoalStartHandler() {
    setModalIsVisible(true);
  }

  function addGoalEndHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={addGoalStartHandler}
        />
        {modalIsVisible && (
          <GoalInput
            addGoal={addGoalHandler}
            visible={modalIsVisible}
            closeHandler={addGoalEndHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDelete={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});

export default App;
