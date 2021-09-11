import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import blueColor from "../lib/colors/blue";
import tasksList from "../lib/store/tasks";
import { RootStackParamList } from "../lib/types/RootStackParamList";

type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Task">;

const TaskScreen: React.FC<TaskScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const task = tasksList.getSingleTask(id);
  if (!task) return null;

  React.useLayoutEffect(() => {
    const handleDelete = () => {
      tasksList.delete(id);
      navigation.goBack();
    }

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleDelete} style={{marginRight: 20}}>
          <AntDesign name="delete" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
