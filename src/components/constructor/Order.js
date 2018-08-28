import React, { Component } from "react";

// Order component;
class Order extends Component {

  render() {
    return (
      <div className="main-constructor__order">
        {this.props.children}
      </div>
    );
  }
}

export default Order;