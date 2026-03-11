import { connect } from "react-redux";
import NoteItem from "../noteItem";
import styles from "./styles.module.css";

function NoteList({ todos }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <NoteItem key={todo.id} todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(NoteList);
