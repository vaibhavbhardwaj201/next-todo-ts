import { TodosProvider } from '@/store/todosContex'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App | Vaibhav',
  description: 'Todo App where you can make todos, complete task with all tasks, active and completed tasks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosProvider>
          {children}
        </TodosProvider>
      </body>
    </html>
  )
}
