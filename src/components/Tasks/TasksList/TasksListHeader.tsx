import { Badge } from "../../UI/Badge/Badge";

import styles from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  totalTasks: number;
  totalCompletedTasks: number;
}

export function TasksListHeader({
  totalTasks,
  totalCompletedTasks,
}: TasksListHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        Total tasks <Badge>{totalTasks}</Badge>
      </div>
      <div className={styles.completed}>
        Completed{" "}
        <Badge>
          {totalCompletedTasks} of {totalTasks}
        </Badge>
      </div>
    </div>
  );
}
