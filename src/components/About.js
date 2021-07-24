import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="alignCenter">
      <h4>Version 1.0.0</h4>
      <em>
        Developed by <span style={{ color: "grey" }}>Girish Shirke</span>
      </em>
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
};
