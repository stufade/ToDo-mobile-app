import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tasksList from "../lib/store/tasks";
import { RootStackParamList } from "../lib/types/RootStackParamList";

type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Task">;

const TaskScreen: React.FC<TaskScreenProps> = ({ route }) => {
  const { id } = route.params;
  const task = tasksList.getSingleTask(id);

  if (!task) return null;

  return (
    <View style={styles.container}>
      <Text>{task.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default TaskScreen;
