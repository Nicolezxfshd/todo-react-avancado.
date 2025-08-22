import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4 w-full">
      <input
        className="border p-2 rounded flex-1 text-black focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
        Adicionar
      </button>
    </form>
  );
};

export default TodoForm;
