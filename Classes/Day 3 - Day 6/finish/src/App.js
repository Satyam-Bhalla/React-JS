import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((a) => {
      console.log(a);
      a.value = 0;
      return a;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(counters[index]);
    counters[index] = { ...counter };
    console.log(counters[index]);
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.value);
    // this.state.value = this.state.value+1;
    // this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(counters[index]);
    counters[index] = { ...counter };
    console.log(counters[index]);
    counters[index].value--;
    this.setState({ counters });
    // console.log(this.state.value);
    // this.state.value = this.state.value+1;
    // this.setState({ value: this.state.value + 1 });
  };


  handleDelete = (id) => {
    console.log("Event handler delete call", id);
    const counters = this.state.counters.filter((a) => a.id !== id);
    console.log(counters);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length} />
        <main className="container mt-2">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
