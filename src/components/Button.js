import React from "react";
import PropTypes from "prop-types";

export const Button = ({ color, text, onClick }) => {
  const style = { backgroundColor: color };

  return (
    <button onClick={onClick} style={style} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Text",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
