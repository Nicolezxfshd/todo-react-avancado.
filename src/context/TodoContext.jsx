import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState([]);

  const addTodo = (todo) => setTodos([...todos, { id: Date.now(), text: todo }]);
  const removeTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleFilter = (filter) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, filters, toggleFilter }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
