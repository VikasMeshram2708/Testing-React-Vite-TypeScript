import { ChangeEvent, FormEvent, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos([...todos, todo]);

    // reset the input filed
    setTodo("")

  };

  return (
    <section className="min-h-screen bg-slate-900">
      <h1 className="pt-10 text-center text-2xl text-white">Hello,World!</h1>
      <form onSubmit={handleSubmit} className="mt-10 flex justify-center">
        <input
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          type="text"
          className="p-2 rounded"
          placeholder="Enter Totdo"
        />
        <button
          type="submit"
          className="text-white font-semibold px-4 py-2 bg-pink-500 rounded"
        >
          Add Todo
        </button>
      </form>
      <ul className="mt-10 max-w-md mx-auto text-white">
        {todos?.map((todo) => (
          <div key={Math.floor(1000 + Math.random() * 9000)} className="border-2 border-purple-500 rounded p-2 flex items-center mb-5 justify-between">
            <li>{todo}</li>
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default App;
