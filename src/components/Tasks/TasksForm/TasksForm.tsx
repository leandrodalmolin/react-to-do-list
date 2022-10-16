import { FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './TasksForm.module.css';

export function TasksForm() {
  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    console.log(data.get('form-task'));
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input type="text" name="form-task" placeholder="Add a new task" />
      <button type="submit">
        Add
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}