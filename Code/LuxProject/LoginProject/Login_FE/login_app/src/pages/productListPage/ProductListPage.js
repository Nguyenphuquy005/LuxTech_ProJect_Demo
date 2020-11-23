
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ProductList from "./../../components/productList/ProductList"
import ProductItem from "./../../components/productItem/ProductItem"
import axios from 'axios'


class ProductListPage extends Component {
  render() {
    var products = []
    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:8080/api/tutorials',
    //   data: null
    // }).then(res => {
    //   console.log(res);

    // }).catch(err => {
    //   console.log(err);
    // })
    return (
      <div>
        <div className="container mt-3">
          <button type="button" className="btn btn-danger">Thêm sản phẩm</button>
          <div className="panel panel-default">
            <div className="panel-heading">Danh sách sản phẩm</div>
            <div className="panel-body">
              <ProductList>
                {this.showProduct(products)}
              </ProductList>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showProduct(products) {
    var result = null
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return result;
  }

}


export default ProductListPage;
