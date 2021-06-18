const TodoForm = ({addTodo}) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue("");
      };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder="Add a ToDo..."
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};
