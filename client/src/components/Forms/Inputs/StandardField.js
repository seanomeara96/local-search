import React from "react";
const StandardField = (props) => {
  let errorToShow;
  if (props.meta.form === "registerUser") {
    if (
      props.input.name === "username" &&
      props.input.value.length < 3 &&
      props.input.value.length > 0 &&
      props.meta.touched === true
    ) {
      errorToShow = "You must provide a longer username.";
    }
    if (
      props.input.name === "username" &&
      props.input.value.length < 1 &&
      props.meta.touched === true
    ) {
      errorToShow = "Please provide a username.";
    }
    if (
      props.input.name === "username" &&
      props.input.value.length > 50 &&
      props.meta.touched === true
    ) {
      errorToShow = "Username cannot exceed 50 characters.";
    }
    if (
      props.input.name === "email" &&
      props.input.value.length < 1 &&
      props.meta.touched === true
    ) {
      errorToShow = "Please enter an email address.";
    }
    if (
      props.input.name === "password" &&
      props.input.value.length < 1 &&
      props.meta.touched === true
    ) {
      errorToShow = "Please enter a password.";
    }
    if (
      props.input.name === "password" &&
      props.input.value.length < 8 &&
      props.input.value.length > 0 &&
      props.meta.touched === true
    ) {
      errorToShow = "Password must be at least 8 characters long.";
    }
    if (
      props.input.name === "password" &&
      props.input.value.length > 30 &&
      props.meta.touched === true
    ) {
      errorToShow = "Password must not exceed 30 characters.";
    }
  }
  let formClass;
  if (typeof errorToShow == "string") {
    formClass = "ui form error";
  } else {
    formClass = "ui form";
  }
  return (
    <div className={formClass}>
      <input
        {...props.input}
        type={props.type}
        id={props.id}
        name={props.name}
        autoComplete="new-password"
      />
      <div className="ui error message">{errorToShow}</div>
    </div>
  );
};
export default StandardField;
