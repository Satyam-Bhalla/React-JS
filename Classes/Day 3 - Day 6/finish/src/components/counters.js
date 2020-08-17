import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm-2"
        >
          Reset
        </button>
        {this.props.counters.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
            counter={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          >
            {/* <h1>Hello</h1>
              <h2>World</h2> */}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
