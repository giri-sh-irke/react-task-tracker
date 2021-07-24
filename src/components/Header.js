import React from "react"; //for class components
// import PropTypes from 'prop-types'
import { Button } from "./Button";
//Functional component
export const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>{props.title}</h1>
        <Button
          color={props.toggleAddUI ? "black" : "green"}
          text={props.toggleAddUI ? "Close" : "Add"}
          onClick={props.toggleAdd}
        />
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
