import { TasksForm } from './TasksForm/TasksForm';
import { TasksList } from './TasksList/TasksList';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <TasksForm />
      <TasksList />
    </div>
  )
}