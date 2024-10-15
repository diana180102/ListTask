import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
 
export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Lista de Tareas</h1>
      <TaskForm />
      <TaskList />
    </main>
  );
}