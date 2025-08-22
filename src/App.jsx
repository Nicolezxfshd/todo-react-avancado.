import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="todo-container flex flex-col items-center p-6 max-w-lg w-full mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">Lista de Tarefas</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
