import NoteForm from "../noteForm";
import NoteList from "../noteList";
import styles from "./styles.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <NoteForm />
      <NoteList />
    </main>
  );
}
export default Main;
