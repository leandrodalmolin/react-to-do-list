import { Trash } from 'phosphor-react';
import { TasksListHeader } from './TasksListHeader';

import styles from './TasksList.module.css';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
};

interface TasksListProps {
  tasks: Task[];
};

export function TasksList({ tasks }: TasksListProps) {
  return (
    <>
      <TasksListHeader />
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
            <button className={styles["btn-delete"]}>
              <Trash size={16} weight="bold" />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}