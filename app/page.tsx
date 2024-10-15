'use client'

import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function HomePage() {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logout();
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">Lista de Tareas</h1>
        <TaskForm />
        <TaskList />
        <button
          type="button"
          className="p-2 bg-blue-500 text-white rounded mt-4"
          onClick={(e) => handleSubmit(e)}
        >
          Logout
        </button>
      </main>
    </ProtectedRoute>
  );
}


