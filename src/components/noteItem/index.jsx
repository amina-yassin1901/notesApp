import { connect } from "react-redux";
import { deleteNote, updateNote } from "../../redux/actions";
import styles from "./styles.module.css";
import { useState } from "react";
import UpdateForm from "../updateForm";
function NoteItem({ todo, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newTitle, newText) => {
    updateNote({
      id: todo.id,
      title: newTitle,
      text: newText,
    });
    setIsEditing(false);
  };
  return (
    <div className={styles.card}>
      {isEditing ? (
        <UpdateForm
          initialTitle={todo.title}
          initialText={todo.text}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className={styles.content}>
            <h2 className={styles.title}>{todo.title}</h2>
            <p className={styles.text}>{todo.text}</p>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className={styles.buttonDelete}
              onClick={() => deleteNote(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = { deleteNote, updateNote };
export default connect(null, mapDispatchToProps)(NoteItem);
