import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TaskType } from "./HomeScreen";
import blueColor from "../lib/colors/blue";
import { Actions } from "./HomeScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../lib/types/RootStackParamList";

type TaskProps = {
  navigator: NativeStackNavigationProp<RootStackParamList, "Home">;
  dispatch: React.Dispatch<Actions>;
};

const Task: React.FC<TaskType & TaskProps> = ({
  name,
  complited,
  id,
  dispatch,
  navigator,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch({ type: "toggleComplite", payload: { id } })}
      >
        {complited ? (
          <AntDesign name="checkcircleo" size={28} color="white" />
        ) : (
          <Entypo name="circle" size={28} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1}} onPress={() => navigator.navigate("Task", {id})}>
        <View>
          <Text
            style={
              complited ? { ...styles.text, ...styles.complited } : styles.text
            }
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 17,
    borderRadius: 15,
    backgroundColor: blueColor,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    bottom: 2,
    marginLeft: 20,
  },
  complited: {
    textDecorationLine: "line-through",
  },
});

export default Task;
