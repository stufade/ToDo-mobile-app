import { makeAutoObservable } from "mobx";

export type TaskType = {
  name: string;
  complited: boolean;
  id: number;
};

const initialState = [
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

class TasksList {
  tasks: TaskType[] = [];

  constructor() {
    makeAutoObservable(this);

    this.tasks = initialState;
  }

  toggle(id: number) {
    const newTasks = this.tasks.filter(task => task.id !== id);
    const newTask = this.tasks.find(task => task.id === id);

    if (!newTask) return

    newTask.complited = !newTask.complited;

    this.tasks = [...newTasks, newTask];
  }

  changeText(id: number, name: string) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, name } : task
    );
  }

  add(name: string) {
    const task: TaskType = {
      name,
      id: Math.random(),
      complited: false,
    };

    this.tasks.push(task);
  }

  getSingleTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
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
