import React from "react";
import Options from "./Options";
const AddBusiness = () => {
  return (
    <section className="page-section">
      <div className="wrapper">
        <h2 className="ui header">Register your Business</h2>
        <div className="rows">
          <div className="rows__40">
            <form action="/register" className="ui form">
              <div className="field">
                <label for="">Enter your Business Name</label>
                <input type="text" />
              </div>
              <div className="field">
                <label for="">Your name</label>
                <div className="two fields">
                  <div className="field">
                    <input type="text" placeholder="Firstame" />
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Lastname" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label for="">Address</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input
                      type="text"
                      placeholder="Enter the business address"
                    />
                  </div>
                  <div className="four wide field">
                    <input type="text" placeholder="Eircode" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label for="">Select your business location(s)</label>
                <select name="" id="">
                  <Options />
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddBusiness;
