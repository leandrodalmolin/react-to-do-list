import { Badge } from '../../UI/Badge/Badge';

import styles from './TasksListHeader.module.css';

export function TasksListHeader() {
  return (
    <div className={styles.header}>
      <div>Total tasks <Badge>3</Badge></div>
      <div className={styles.completed}>Completed <Badge>2 of 3</Badge></div>
    </div>
  )
}