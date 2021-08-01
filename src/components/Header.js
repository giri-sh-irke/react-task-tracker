import React from "react"; //for class components
// import PropTypes from 'prop-types'
import { Button } from "./Button";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

//Functional component
export const Header = (props) => {
  const location = useLocation();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <header className="header">
        <h1>{props.title}</h1>
        <h3>Counter from redux store = {counter}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {location.pathname === "/" && (
          <Button
            color={props.toggleAddUI ? "black" : "green"}
            text={props.toggleAddUI ? "Close" : "Add"}
            onClick={props.toggleAdd}
          />
        )}
      </header>
    </>
  );
};

// Header.defaultProps = {   //To add default props
//     title: 'Task tracker'
// }

// Header.propTypes = {  //To specify the type of props
//     title : PropTypes.string
// }

//Class component syntax

// export default class HeaderClass extends React.Component{

//     render(){
//         return(
//             <h1>Hello from class</h1>
//         )
//     }
// }
