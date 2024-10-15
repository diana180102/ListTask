'use client';

import { createContext, useState, useEffect } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, input: string) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => { },
  toggleTask: () => { },
  editTask: () => { },
  deleteTask: () => { },
});

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Cargar tareas desde localStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Guardar tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: number, input: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: input } : task
      )
    );
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}