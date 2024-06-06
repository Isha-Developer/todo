"use client";

import { useState } from "react";

export default function Completetask() {
  const [tasks, setTasks] = useState([]);

  const handleStatus = async (ID: string) => {
    const response = await fetch("api/changeStatus", {
      method:"POST",
     body:JSON.stringify({id:ID, status: 'PENDING'})
    })
    const res = await response.json()
    console.log(res)
  }

  const getTasks = async () => {
    const data = await fetch("/api/completeTask", {
      method: "GET",
    });
    const temp = await data.json();
    setTasks(temp);
  };
  
  getTasks();

  return (
    <div>
      <ul>
        {tasks.map(
          (
            data: {
              id: string;
              createAt: string;
              task: string;
              duedate: string;
              status: string;
            },
            index: number
          ) => (
            <li className="flex justify-between border py-5 px-10 m-2">
            <h1 className="w-[25%]">{data.task}</h1>
            <h1 className="w-[25%]">{data.duedate}</h1>
            <h1 className="w-[25%]">{data.status}</h1>
            <div className="w-[25%]">
              <button onClick={() => handleStatus(data.id)}>🔄</button>
            </div>
          </li>
          )
        )}
      </ul>
    </div>
  );
}
