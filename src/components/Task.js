import { FaTimes } from "react-icons/fa";

export const Task = ({ tasksDetails, deleteTask }) => {
  return (
    <div className="task">
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
