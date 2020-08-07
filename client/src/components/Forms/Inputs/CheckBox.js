import React from "react";
const CheckBox = (props) => {
  return (
    <input
      {...props.input}
      type={props.type}
      id={props.id}
      tabIndex={props.tabIndex}
      name={props.name}
      className={props.className}
    />
  );
};
export default CheckBox;
