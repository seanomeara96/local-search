import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import StandardField from "../../Inputs/StandardField";
import styles from "./LoginForm.module.css";
import axios from "axios";
import history from "../../../../history";
class LoginForm extends React.Component {
  onSubmit = (formValues) => {
    axios
      .post("/login", formValues)
      .then(() => {
        // redux thunk needs to be worked in here
        // the json accesstoken should be added to the auth state w/ a refresh token
        // redirect to logged in homepage
        history.push("/");
      })
      .catch(() => {
        // catch errs and display them
      });
  };
  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <div className="field">
          <label htmlFor="email">Email</label>
          <Field
            component={StandardField}
            id="email"
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <Field
            component={StandardField}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className={styles.registerLink}>
          <Link to="/register">Don't have an account?</Link>
        </div>
        <button className="ui green button" type="submit">
          Log in
        </button>
      </form>
    );
  }
}
export default reduxForm({
  form: "loginForm",
})(LoginForm);
