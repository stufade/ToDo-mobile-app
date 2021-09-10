import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import { RootStackParamList } from "./lib/types/RootStackParamList";
import blueColor from "./lib/colors/blue";
import { StatusBar } from "react-native";
import TaskScreen from "./components/TaskScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerStyle: {
    backgroundColor: blueColor,
  },
  headerTitleStyle: {
    fontWeight: "bold" as const,
    fontSize: 30,
  },
  headerTintColor: "#fff",
  headerShadowVisible: false,
};

function App() {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: { ...DefaultTheme.colors, background: "#fff" },
      }}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Tasks",
            ...screenOptions,
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{
            title: "Edit Task",
            ...screenOptions,
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" backgroundColor={blueColor} />
    </NavigationContainer>
  );
}

export default App;
