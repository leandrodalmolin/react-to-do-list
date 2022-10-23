import clipboardImage from "../../../assets/clipboard.png";
import styles from "./TasksListEmpty.module.css";

export function TasksListEmpty() {
  return (
    <div className={styles.container}>
      <img src={clipboardImage} alt="" />
      <p><strong>You don't have tasks registered yet.</strong></p>
      <p>Create tasks and organise your to-do items.</p>
    </div>
  )
}