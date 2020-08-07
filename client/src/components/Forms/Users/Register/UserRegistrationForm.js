import React from "react";
import { Field, reduxForm } from "redux-form";
import StandardField from "../Inputs/StandardField";
import CheckBox from "../Inputs/CheckBox";
import axios from "axios";
class UserRegistrationForm extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
    if (
      formValues.password === formValues.confirmedPassword &&
      formValues.terms === true // Terms and Conditions have been agreed to
    ) {
      this.cleanUp(formValues).then((cleanedFields) => {
        // This function should probably be called by redux-thunk
        axios
          .post("/register", cleanedFields)
          .then((serverResponse) => {
            console.log(serverResponse);
          })
          .catch((errs) => {
            console.log(errs);
          });
        // Then should redirect to sign in
      });
    } else {
      return;
      // Make some changes to confirmed password field
      // and/or the checkbox
    }
  };

  cleanUp({ username, password, email, confirmedPassword, terms }) {
    // Must add check for user agreement
    return new Promise((resolve, reject) => {
      if (typeof username !== "string") {
        username = "";
      }
      if (typeof email !== "string") {
        email = "";
      }
      if (typeof password !== "string") {
        password = "";
      }
      if (typeof confirmedPassword != "string") {
        confirmedPassword = "";
      }
      let newUser = {
        username: username.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        password: password.trim().toLowerCase(),
      };
      resolve(newUser);
    });
  }

  render() {
    return (
      <section className="page-section">
        <div className="wrapper">
          <h2 className="header">Create a user account</h2>
          <div className="rows">
            <div className="rows__300px">
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"
              >
                <div className="field">
                  <label htmlFor="chosenUsername">Pick a username</label>
                  <Field
                    component={StandardField}
                    id="chosenUsername"
                    type="text"
                    name="username"
                  />
                </div>
                <div className="field">
                  <label htmlFor="emailAddress">Enter your Email</label>
                  <Field
                    component={StandardField}
                    name="email"
                    id="emailAddress"
                    type="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="chosenPassword">Enter a password</label>
                  <Field
                    component={StandardField}
                    name="password"
                    id="chosenPassword"
                    type="password"
                  />
                </div>
                <div className="field">
                  <label htmlFor="confirmPassword">Confirm your password</label>
                  <Field
                    component={StandardField}
                    id="confirmPassword"
                    name="confirmedPassword"
                    type="password"
                  />
                </div>
                <div className="field">
                  <div className="ui checkbox">
                    <Field
                      component={CheckBox}
                      id="CheckTC"
                      type="checkbox"
                      tabIndex="0"
                      name="terms"
                      className="hidden"
                    />
                    <label htmlFor="CheckTC">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <button className="ui green button" type="submit">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default reduxForm({
  form: "registerUser",
})(UserRegistrationForm);
