import React from "react";
import Button from "../../buttons/Button";
import BusinessCategories from "../../../business-categories";
import IrishLocations from "../../../irish-locations";
import { Field, reduxForm } from "redux-form";
import Axios from "axios";
const SearchForm = (props) => {
  console.log(props);
  const onSubmit = (formValues) => {
    console.log(formValues);
    Axios.post("/test", formValues);
  };
  const input = (props) => <input {...props.input} list={props.list} />;
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        component={input}
        name="category"
        id="category"
        list="categories"
      />
      <datalist id="categories">
        {BusinessCategories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </datalist>
      <Field component={input} id="location" name="location" list="locations" />
      <datalist id="locations">
        {IrishLocations.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </datalist>

      <div>
        <Button type="submit" modifier="primary">
          Search
        </Button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "search" })(SearchForm);
