import { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './TasksForm.module.css';

interface TasksFormProps {
  onCreateTask: (taskText: string) => void;
}

export function TasksForm({ onCreateTask }: TasksFormProps) {
  const [taskText, setTaskText] = useState('');

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onCreateTask(taskText);
    setTaskText('');
  }

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={taskText}
        onChange={handleTaskTextChange}
        placeholder="Add a new task"
      />
      <button type="submit">
        Add
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
