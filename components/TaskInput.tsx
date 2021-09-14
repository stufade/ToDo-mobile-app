import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import blueColor from "../lib/colors/blue";
import tasksList from "../lib/store/tasks";

interface TaskInputProps {}

const TaskInput: React.FC<TaskInputProps> = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text) return;
    tasksList.add(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <Entypo name="circle" size={28} color={blueColor} />
      <TextInput
        style={styles.input}
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={handleSubmit}
        selectionColor={blueColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    padding: 17,
    borderRadius: 15,
    left: 20,
    right: 20,
    borderWidth: 2,
    borderColor: blueColor,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: blueColor,
    bottom: 2,
    marginLeft: 20,
  },
});

export default TaskInput;
