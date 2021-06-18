const TodoList = () => {
  // Set the initial state
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);
  const addTodo = (value) => {
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
  };
  const removeTodo = (event) => {
    const index = Number(event.target.id);
    let tmp = [...todos]; // clone the state
    tmp.splice(index, 1);
    setTodos(tmp);
  };
  const todos_list = todos.map((todo, i) => {
    console.log(todo);
    return <ToDo id={i} key={i} todo={todo} removeTodo={removeTodo} />;
  });
  return (
    <ul className="list-group">
      {todos_list}
      <TodoForm addTodo={addTodo} />
    </ul>
  );
};
