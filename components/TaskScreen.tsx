import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInputEndEditingEventData,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import blueColor from "../lib/colors/blue";
import tasksList from "../lib/store/tasks";
import { RootStackParamList } from "../lib/types/RootStackParamList";

type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Task">;

const TaskScreen: React.FC<TaskScreenProps> = ({ route }) => {
  const { id } = route.params;
  const task = tasksList.getSingleTask(id);

  if (!task) return null;

  const [text, setText] = useState(task.name);

  const handleSubmit = () => {
    tasksList.changeText(id, text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.change}
          defaultValue={task.name}
          onChangeText={(text) => setText(text)}
          onSubmitEditing={handleSubmit}
          multiline
          blurOnSubmit
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueColor,
    padding: 20,
  },
  wrapper: {
    borderBottomWidth: 1,
    borderColor: "#fff",
    padding: 0
  },
  change: {
    fontSize: 22,
    color: "#fff",
    
  },
});

export default TaskScreen;
