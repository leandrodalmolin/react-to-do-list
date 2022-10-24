import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksForm } from "./TasksForm/TasksForm";
import { TasksInfo } from "./TasksInfo/TasksInfo";
import { TasksList } from "./TasksList/TasksList";

import styles from "./Tasks.module.css";
import { TasksListEmpty } from "./TasksListEmpty/TasksListEmpty";

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const hasTasks = tasks.length > 0;

  // NOTE:
  // The useEffect() was removed because it is unnecessary.
  // "tasks" state is always re-rendering the component every time
  // it gets updated. Therefore, it is possible to count the completed
  // tasks without any extra state or useEffect().
  //
  // const [completedTasks, setCompletedTasks] = useState(0);
  // useEffect(() => {
  //   const numberOfCompletedTasks = tasks.reduce((count, task) => {
  //     return task.isCompleted ? count + 1 : count;
  //   }, 0);
  //   setCompletedTasks(numberOfCompletedTasks);
  // }, [tasks]);

  const numberOfCompletedTasks = tasks.reduce((count, task) => {
    return task.isCompleted ? count + 1 : count;
  }, 0);

  function handleCreateTask(taskText: string) {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <div className={styles.tasks}>
      <TasksForm onCreateTask={handleCreateTask} />
      <TasksInfo totalTasks={tasks.length} totalCompletedTasks={numberOfCompletedTasks} />
      {!hasTasks && <TasksListEmpty />}
      {hasTasks && <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />}
    </div>
  );
}
