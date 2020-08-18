import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace("/products");
  };

  render() {
    const {id} = this.props.match.params;
    return (
      <div>
        <h1>Product Details - {id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
