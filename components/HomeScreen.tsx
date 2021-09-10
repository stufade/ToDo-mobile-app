import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../lib/types/RootStackParamList";
import TaskInput from "./TaskInput";
import tasksList from "../lib/store/tasks";
import { observer } from "mobx-react-lite";
import TasksList from "./TasksList";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeProps> = observer(({ navigation }) => {
  return (
    <>
      <TasksList navigator={navigation} data={[...tasksList.notFinishedTasks, ...tasksList.finishedTasks]}/>
      <TaskInput />
    </>
  );
});


export default HomeScreen;
