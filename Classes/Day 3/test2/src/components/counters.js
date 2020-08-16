import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      {id: 5,value: 5}
    ],
  };

  handleDelete = (id) => {
      console.log("Event handler delete call",id);
      const counters =  this.state.counters.filter(a => a.id !== id);
      console.log(counters);
      this.setState({counters});
  }
  

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((item) => (
          <Counter key={item.id} id={item.id} value={item.value} onDelete={this.handleDelete}>
              {/* <h1>Hello</h1>
              <h2>World</h2> */}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
