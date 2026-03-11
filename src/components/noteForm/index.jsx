import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions";
import styles from "./styles.module.css";

function NoteForm({ addNote }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addNote({
      id: Date.now(),
      ...data,
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        {...register("title", { required: true })}
      />
      <textarea
        className={styles.textarea}
        name="text"
        {...register("text", { required: true })}
      ></textarea>
      <button className={styles.button} type="submit">
        Add Note
      </button>
    </form>
  );
}
const mapDispatchToProps = { addNote };
export default connect(null, mapDispatchToProps)(NoteForm);
