import { FaTimes } from "react-icons/fa";

export const Task = ({ tasksDetails, deleteTask, onToggle }) => {
  let reminderStyle = {};
  if (tasksDetails.reminder) {
    reminderStyle = { borderLeft: "5px solid green" };
  }
  // else{
  //     let reminderStyle = {};
  // }

  return (
    <div
      style={reminderStyle}
      onDoubleClick={() => onToggle(tasksDetails.id)}
      className="task"
    >
      <h3>
        {tasksDetails.text}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => deleteTask(tasksDetails.id)}
        />
      </h3>
      <p>{tasksDetails.day}</p>
    </div>
  );
};

//onClick={deleteTask} this cannot be used to pass an id to the funciton
// onClick={() => deleteTask(id)}, Use this instead
