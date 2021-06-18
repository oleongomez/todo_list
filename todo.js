const ToDo = ({ todo, removeTodo }) => {
  console.log(todo);
  const drawCompleted = (todo) => {
    return (
      <span className="badge bg-primary rounded-pill bg-primary">Remove</span>
    );
  };
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        onClick={removeTodo}
      >
        {todo.text}
        {drawCompleted(todo)}
      </li>
    </>
  );
};
