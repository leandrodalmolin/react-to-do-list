import { v4 as uuidv4 } from 'uuid';
import { TasksForm } from './TasksForm/TasksForm';
import { TasksList } from './TasksList/TasksList';

import styles from './Tasks.module.css';

const tasks = [
  {
    id: uuidv4(),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    isCompleted: false
  },
  {
    id: uuidv4(),
    text: 'Libero quasi amet accusantium eum, repellat quaerat nihil alias assumenda',
    isCompleted: false
  },
  {
    id: uuidv4(),
    text: 'Voluptates adipisci cupiditate eveniet quibusdam laborum quod ipsum delectus ipsa nobis optio',
    isCompleted: false
  }
]


export function Tasks() {
  return (
    <div className={styles.tasks}>
      <TasksForm />
      <TasksList tasks={tasks} />
    </div>
  )
}