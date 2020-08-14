import React, { Component } from "react";
import "../shared/css/component.css";
class counter extends Component {
  state = {
    value: this.props.value ? this.props.value : 0,
  };

  styles = {
    fontSize: 15,
  };
//   constructor(){
//       super();
//       this.handleClick = this.handleClick.bind(this);
//   }


  renderTags() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()} >
          {this.formatSpan()}
        </span>
        <button className="btn btn-secondary btn-sm m-2" onClick={this.handleClick}>
          Increment
        </button>
      </React.Fragment>
    );
  }

  render() {
    return <div className="container-fluid">{this.renderTags()}</div>;
  }
  handleClick = () => {
    // console.log(this.state.value);
    // this.state.value = this.state.value+1;
    this.setState({ value: this.state.value + 1 });
  };

  formatSpan = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
      let classes = "badge m2 badge-"
      classes +=  this.state.value === 0 ? "warning" : "primary";
      return classes;
  }
}

export default counter;
