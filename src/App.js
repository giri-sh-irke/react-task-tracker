// import './App.css';
import { Component, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const [toggleAddUI, settoggleUI] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const addThisTask = { ...newTask, id };
    setTasks([...tasks, addThisTask]);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toogleAddForm = () => {
    console.log("toggleAdd");
    settoggleUI(!toggleAddUI);
  };

  return (
    <div className="container">
      <Header
        title="Hello ABC"
        toggleAdd={toogleAddForm}
        toggleAddUI={toggleAddUI}
      />
      {toggleAddUI && <AddTask onAdd={addTask} />}
      {tasks.length == 0 ? (
        <div id="noTasks">No tasks avaliable</div>
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
