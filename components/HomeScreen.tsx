import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useReducer } from "react";
import { StyleSheet, FlatList, TextInput } from "react-native";
import { RootStackParamList } from "../lib/types/RootStackParamList";
import TaskView from "./TaskView";
import TaskInput from "./TaskInput";
import tasksList from "../lib/store/tasks";
import { observer } from "mobx-react-lite";
import TasksList from "./TasksList";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeProps> = observer(({ navigation }) => {
  return (
    <>
      <TasksList navigator={navigation} />
      <TaskInput />
    </>
  );
});


export default HomeScreen;
