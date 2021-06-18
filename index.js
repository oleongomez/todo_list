const App = () => {
  // Set the initial state
  return (
    <div className="app">
      <h2>ToDos</h2>
      <TodoList />
    </div>
  );
};
ReactDOM.render(<App className="app" />, document.getElementById("root"));
