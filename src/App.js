// import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

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
    settoggleUI(!toggleAddUI);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task tracker"
          toggleAdd={toogleAddForm}
          toggleAddUI={toggleAddUI}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {toggleAddUI && <AddTask onAdd={addTask} />}
              {tasks.length === 0 ? (
                <div id="noTasks">No tasks avaliable</div>
              ) : (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
