import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TasksForm } from './TasksForm/TasksForm';
import { TasksList } from './TasksList/TasksList';

import styles from './Tasks.module.css';

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
};

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(taskText: string) {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    setTasks(prevState => prevState.filter(task => task.id !== taskId));
  }

  return (
    <div className={styles.tasks}>
      <TasksForm onCreateTask={handleCreateTask} />
      <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  )
}