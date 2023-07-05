import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main>
      <h2>Make your todos...</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}
