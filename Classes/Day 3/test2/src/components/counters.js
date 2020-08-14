import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
      
    return (
      <React.Fragment>
        {this.state.counters.map(item => <Counter key={item.id}  value={item.value} />)}
      </React.Fragment>
    );
  }
}

export default Counters;
