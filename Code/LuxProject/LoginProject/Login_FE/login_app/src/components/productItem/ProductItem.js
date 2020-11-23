
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
class ProductItem extends Component {

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'con hang' : 'Het Hang';
    var statusClass = product.status ? 'warning' : ' deafault';
    return (

      <tr>
        <th >{index + 1}</th>
        <th scope="col">{product.id}</th>
        <th scope="col">{product.name}</th>
        <th scope="col">{product.price}</th>
        <th scope="col" className={'label label'
          + { statusClass }
        }>
          {statusName}
        </th>
        <th scope="col">
          <button type="button" className="btn btn-info">Sửa</button>
          <button type="button" className="btn btn-warning">Xóa</button>
        </th>
      </tr>

    );
  }

}

export default ProductItem;
