import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main>
      <h2>Make your todos...</h2>
      <AddTodo />
      <Todos />
    </main>
  )
}
