'use client';

import { useContext, useState, useRef } from 'react';
import { TaskContext } from '../context/TaskContext';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskItem({ task }: { task: Task }) {
  const { toggleTask, editTask, deleteTask } = useContext(TaskContext);
  const editInput = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <li
      className={`p-4 bg-white shadow rounded flex justify-between items-center ${task.completed ? 'line-through text-gray-500' : ''
        }`}
    >
      {isEditing ?
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          ref={editInput}
          defaultValue={task.title}
          onKeyDown={(e) => {
            if (e.key === "Enter" && editInput.current) {
              editTask(task.id, editInput.current.value)
              setIsEditing(false)
            }
          }}
        />
        :
        <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
          {task.title}
        </span>
      }
      <div className='mx-4'>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-yellow-600 hover:text-yellow-900 mr-4"
        >
          Editar
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}