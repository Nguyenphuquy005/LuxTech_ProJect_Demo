
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <form className='container'>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input type="Text" className="form-control" i />
        </div>
        <div className="form-check">
          <input type="checkbox" />
          <label className="form-check-label" htmlFor="exampleCheck1">Con Hang</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

export default ProductActionPage;
