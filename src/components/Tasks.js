
// const tasks = [] - We can use this, but it is not the part of our component
import { Task } from "./Task";
export const Tasks = ({tasks, onDelete, onToggle}) => {

    //We use useState hook to access the states
    //Here tasks is now the part of the component 

  return (
    <div>
      {tasks.map((task) => {
        return <div key={task.id}>
            <Task tasksDetails = {task} deleteTask={onDelete} onToggle={onToggle} / >
        </div>;
      })}
    </div>
  );
};



// Warning: Each child in a list should have a unique "key" prop.
// Solution : Add a unique key to map 