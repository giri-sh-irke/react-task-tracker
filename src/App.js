// import './App.css';
import { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {};

  return (
    <div className="container">
      <Header title="Hello ABC" />
      {tasks.length == 0 ? (
        <div id="noTasks">No tasks avaliable</div>
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      )}
    </div>
  );
}

export default App;
