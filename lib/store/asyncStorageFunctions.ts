import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskType } from "./tasks";

const key = "tasks";

export const getTasks = async (): Promise<string | null | undefined> => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message);
		} else {
			console.log(e);
		}
	}
};

export const setTasks = async (value: TaskType[]) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message);
		} else {
			console.log(e);
		}
	}
};
