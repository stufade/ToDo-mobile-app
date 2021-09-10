import { makeObservable, observable } from "mobx";

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
    makeObservable(this, {
      tasks: observable,
    });

    this.tasks = initialState;
  }

  toggle(id: number) {
    const taskToToggle = this.tasks.find(task => task.id === id);
    if (!taskToToggle) return
    taskToToggle.complited = !taskToToggle.complited;
  }
}

const tasksList = new TasksList();

export default tasksList;
