import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions";

function NoteForm({ addNote }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addNote({
      id: Date.now(),
      ...data,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("title", { required: true })} />
      <textarea
        name="text"
        {...register("text", { required: true })}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}
const mapDispatchToProps = { addNote };
export default connect(null, mapDispatchToProps)(NoteForm);
