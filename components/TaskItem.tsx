"use client";

import { useContext, useState, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

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
      className={`p-4 bg-white  shadow-md rounded hover:bg-zinc-200  flex justify-between items-center ${
        task.completed ? "line-through text-gray-500" : ""
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          className="input input-bordered input-info w-full mx-2 "
          ref={editInput}
          defaultValue={task.title}
          onKeyDown={(e) => {
            if (e.key === "Enter" && editInput.current) {
              editTask(task.id, editInput.current.value);
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
          {task.title}
        </span>
      )}
      <div className="flex flex-row gap-2 ">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn btn-active btn-accent text-white"
        >
         {isEditing ? 'Cancelar' : 'Editar'} 
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-active btn-primary"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
