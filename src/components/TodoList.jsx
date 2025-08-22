import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

const TodoList = () => {
  const { todos, filter } = useTodos();

  // Usando useMemo para evitar recalcular a lista filtrada em cada renderização
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === "all") return true;
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });
  }, [todos, filter]); // Só recalcula quando todos ou filter mudam

  return (
    <div className="mt-6 max-h-80 overflow-y-auto pr-2 w-full">
      {filteredTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <p className="text-center text-black mb-2">Nenhuma tarefa encontrada</p>
          <p className="text-center text-gray-600 text-sm">Adicione uma nova tarefa acima</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;

