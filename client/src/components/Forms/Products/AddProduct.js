import React from "react";
const AddProduct = () => {
  return (
    <section className="page-section">
      <div className="wrapper">
        <h2 className="ui header">Please add your product</h2>
        <div className="rows">
          <div className="rows__40">
            <form className="ui form" method="POST" action="/add-product">
              <div className="field">
                <label for="">Please upload an image</label>
                <input type="file" />
                <img className="ui fluid image" src="" alt="" />
              </div>
              <div className="field">
                <label for="">product info</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input type="text" placeholder="Item" />
                  </div>
                  <div className="four wide field">
                    <input type="text" placeholder="$Price" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label for="">Description</label>
                <textarea
                  placeholder="Describe what you are selling in more detail"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="field">
                <label for="">Location</label>
                <input type="text" placeholder="Where can this be found?" />
              </div>
              <div>
                <button className="ui green button">Add Product</button>
                <button className="ui grey basic button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddProduct;
