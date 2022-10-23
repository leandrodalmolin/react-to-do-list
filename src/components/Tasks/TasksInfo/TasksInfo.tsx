import { Badge } from "../../UI/Badge/Badge";

import styles from "./TasksInfo.module.css";

interface TasksInfoProps {
  totalTasks: number;
  totalCompletedTasks: number;
}

export function TasksInfo({ totalTasks, totalCompletedTasks }: TasksInfoProps) {
  const badgeText = totalTasks > 0
    ? `${totalCompletedTasks} of ${totalTasks}`
    : `${totalTasks}`
  ;

  return (
    <div className={styles.container}>
      <div>
        Total tasks <Badge>{totalTasks}</Badge>
      </div>
      <div className={styles.completed}>
        Completed{" "}
        <Badge>{badgeText}</Badge>
      </div>
    </div>
  );
}
