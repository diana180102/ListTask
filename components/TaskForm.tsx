'use client';
 
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
 
export default function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTask(title);
    setTitle('');
  };
 
  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered input-success w-full "
        placeholder="Nueva tarea"
      />
      
      <button type='submit' className="btn btn-success text-white mx-4">Añadir</button>
    </form>
  );
}