import { useTodos } from "../context/TodoContext";

export default function TodoFilters() {
  const { filter, dispatch } = useTodos();

  const handleFilterChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };

  return (
    <div className="my-4 w-full max-w-xs mx-auto">
      <select
        value={filter}
        onChange={handleFilterChange}
        className="w-full p-2 border border-gray-300 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
      >
        <option value="all">Todas as tarefas</option>
        <option value="completed">Tarefas concluídas</option>
        <option value="pending">Tarefas pendentes</option>
      </select>
    </div>
  );
}
