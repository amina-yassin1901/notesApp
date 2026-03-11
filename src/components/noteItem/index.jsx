import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions";
import styles from "./styles.module.css";
function NoteItem({ todo, deleteNote }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{todo.title}</h2>
        <p className={styles.text}>{todo.text}</p>
      </div>

      <button className={styles.button} onClick={() => deleteNote(todo.id)}>
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = { deleteNote };
export default connect(null, mapDispatchToProps)(NoteItem);
