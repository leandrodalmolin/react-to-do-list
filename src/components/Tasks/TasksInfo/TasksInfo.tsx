import { Badge } from "../../UI/Badge/Badge";

import styles from "./TasksInfo.module.css";

interface TasksInfoProps {
  totalTasks: number;
  totalCompletedTasks: number;
}

export function TasksInfo({
  totalTasks,
  totalCompletedTasks,
}: TasksInfoProps) {
  return (
    <div className={styles.container}>
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
