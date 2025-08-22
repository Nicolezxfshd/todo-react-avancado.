import { useTodos } from "../context/TodoContext";
import { memo } from "react";

// Usando memo para evitar renderizações desnecessárias quando as props não mudam
const TodoItem = memo(({ todo }) => {
  const { dispatch } = useTodos();

  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 p-3 rounded mb-2 transition-colors shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          className="h-5 w-5 accent-green-600 cursor-pointer"
        />
        <span 
          className={`${todo.completed ? "line-through text-gray-500" : "text-black"} transition-all duration-200`}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
      >
        Remover
      </button>
    </div>
  );
});

export default TodoItem;
