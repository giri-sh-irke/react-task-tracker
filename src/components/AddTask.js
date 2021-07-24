import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
        alert('Please add task');
        return;
    }

    onAdd({text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);


  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add task"
        ></input>
      </div>

      <div className="form-control">
        <label>Day</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Add day"
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
          checked={reminder}
        ></input>
      </div>

      <button className="btn btn-block" type="submit" value="Save Task">Save</button>
    </form>
  );
};
