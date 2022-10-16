import { Trash } from 'phosphor-react';
import { TasksListHeader } from './TasksListHeader';
import { Task as TaskInterface } from '../Tasks';

import styles from './TasksList.module.css';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

interface TasksListProps {
  tasks: TaskInterface[];
  onDeleteTask: (taskId: string) => void;
};

export function TasksList({ tasks, onDeleteTask }: TasksListProps) {
  function handleDeleteButtonClick(taskId: string) {
    onDeleteTask(taskId);
  }

  return (
    <>
      <TasksListHeader />
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id}>
            <Checkbox id={task.id} />
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