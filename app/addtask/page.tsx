'use client'

import { useState } from "react";

export default function Addtask() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit() {
    const res = await fetch("/api/createTask", {
      method: "POST",
      body: JSON.stringify({ task: task, duedate: date }),
    });
    console.log(res.status);
  }

  return (
    <div>
      <form className="flex flex-col my-8 mx-auto w-2/3 bg-indigo-400 py-10 px-12 rounded gap-4">
        <h1 className="text-center font-bold  text-xl">Todo Form</h1>
        <label htmlFor="task">Task Todo</label>
        <textarea
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="resize-none"
          rows={4}
        ></textarea>
        <label htmlFor="date">Due Date</label>
        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-32"
          id="date"
          type="date"
        />
        <button
          onClick={handleSubmit}
          className="font-bold bg-indigo-500 w-24 p-2 rounded mx-auto"
        >
          submits
        </button>
      </form>
    </div>
  );
}
