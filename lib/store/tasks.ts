import { makeAutoObservable, runInAction } from "mobx";
import { getTasks, setTasks } from "./asyncStorageFunctions";

export type TaskType = {
	name: string;
	complited: boolean;
	id: number;
};

class TasksList {
	tasks: TaskType[] = [];

	constructor() {
		makeAutoObservable(this);
		this.fetchTasks();
	}

	async fetchTasks() {
		const fetchedTasks = await getTasks();
		if (!fetchedTasks) return [];
		runInAction(() => {
			this.tasks = JSON.parse(fetchedTasks);
      console.log(fetchedTasks);
		});
	}

	toggle(id: number) {
		const newTasks = this.tasks.filter((task) => task.id !== id);
		const newTask = this.tasks.find((task) => task.id === id);

		if (!newTask) return;

		newTask.complited = !newTask.complited;

		this.tasks = [...newTasks, newTask];
		setTasks(this.tasks);
	}

	changeText(id: number, name: string) {
		this.tasks = this.tasks.map((task) =>
			task.id === id ? { ...task, name } : task
		);
		setTasks(this.tasks);
	}

	add(name: string) {
		const task: TaskType = {
			name,
			id: Math.random(),
			complited: false,
		};

		this.tasks.push(task);
    setTasks(this.tasks)
	}

	getSingleTask(id: number) {
		return this.tasks.find((task) => task.id === id);
	}

	delete(id: number) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
		setTasks(this.tasks);
	}

	get hasFinishedTasks() {
		for (const task of this.tasks) {
			if (task.complited) {
				return true;
			}
		}

		return false;
	}

	get finishedTasks() {
		return this.tasks.filter((task) => task.complited);
	}

	get notFinishedTasks() {
		return this.tasks.filter((task) => !task.complited);
	}
}

const tasksList = new TasksList();

export default tasksList;
