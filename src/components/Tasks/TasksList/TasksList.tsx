import { useState, useEffect } from 'react';
import { Trash } from 'phosphor-react';
import { TasksListHeader } from './TasksListHeader';
import { Task as TaskInterface } from '../Tasks';

import styles from './TasksList.module.css';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

interface TasksListProps {
  tasks: TaskInterface[];
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
};

export function TasksList({ tasks, onDeleteTask, onCompleteTask }: TasksListProps) {
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const numberOfCompletedTasks = tasks.reduce((count, task) => {
      return task.isCompleted ? count + 1 : count;
    }, 0);
    setCompletedTasks(numberOfCompletedTasks);
  }, [tasks]);

  function handleDeleteButtonClick(taskId: string) {
    onDeleteTask(taskId);
  }

  function handleCompletedTask(taskId: string) {
    onCompleteTask(taskId);
  }

  return (
    <>
      <TasksListHeader totalTasks={tasks.length} totalCompletedTasks={completedTasks} />
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id}>
            <Checkbox id={task.id} onCheckedChange={handleCompletedTask.bind(null, task.id)} />
            <label htmlFor={task.id}>{task.text}</label>
            <button className={styles["btn-delete"]} onClick={handleDeleteButtonClick.bind(null, task.id)}>
              <Trash size={16} weight="bold" />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}