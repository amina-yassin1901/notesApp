import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
function UpdateForm({ initialTitle, initialText, onSave, onCancel }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: initialTitle,
      text: initialText,
    },
  });

  const submit = (data) => {
    onSave(data.title, data.text);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <input
        className={styles.input}
        {...register("title", { required: true })}
        placeholder="Title"
      />
      <textarea
        className={styles.textarea}
        {...register("text", { required: true })}
        placeholder="Text"
      />
      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          Save
        </button>
        <button
          type="button"
          className={styles.buttonDelete}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
export default UpdateForm;
