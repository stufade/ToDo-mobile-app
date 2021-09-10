import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useReducer } from "react";
import { StyleSheet, FlatList, TextInput } from "react-native";
import { RootStackParamList } from "../lib/types/RootStackParamList";
import TaskView from "./TaskView";
import TaskInput from "./TaskInput";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type TaskType = {
  name: string;
  complited: boolean;
  id: number;
};
export type Actions = {
  type: "create" | "delete" | "changeText" | "toggleComplite";
  payload: {
    id?: number;
    text?: string;
    task?: TaskType;
  };
};

type StateType = TaskType[];

const initialState: StateType = [
  {
    name: "Погладить кота",
    complited: false,
    id: 1,
  },
  {
    name: "Сделать дз",
    complited: true,
    id: 2,
  },
  {
    name: "Выучить стих",
    complited: false,
    id: 3,
  },
  {
    name: "Почитать книгу",
    complited: true,
    id: 4,
  },
];

function reducer(state: StateType, action: Actions) {
  switch (action.type) {
    case "toggleComplite":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, complited: !item.complited }
          : item
      );
    case "create":
      if (!action.payload.task) {
        return state; 
      }

      return [...state, action.payload.task];
  }

  return initialState;
}

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <FlatList
        style={styles.container}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(task) => (
          <TaskView {...task.item} dispatch={dispatch} navigator={navigation} />
        )}
      />
      <TaskInput dispatch={dispatch} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginBottom: 105,
  },
});

export default HomeScreen;
