import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import tasksList, { TaskType } from "../lib/store/tasks";
import { RootStackParamList } from "../lib/types/RootStackParamList";
import TaskView from "./TaskView";

type TasksListProps = {
  navigator: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const TasksList: React.FC<TasksListProps> = observer(({ navigator }) => {
  return (
    <FlatList
      style={styles.container}
      data={tasksList.tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(task) => (
        <TaskView task={task.item} {...task.item} navigator={navigator} />
      )}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginBottom: 105,
  },
});

export default TasksList;