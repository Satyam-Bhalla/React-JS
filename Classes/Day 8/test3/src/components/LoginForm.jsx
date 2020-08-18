import React, { Component } from "react";
import Input from "./Input";

class LoginForm extends Component {
  // username = React.createRef();
  // componentDidMount(){
  //   this.username.current.focus();
  // }

  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    // console.log(Object.keys(errors));
    return Object.keys(errors).length === 0 ? null : errors;

  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();

    this.setState({ errors:errors || {}  });
    if (errors) return;
    // API Call
    console.log("Submitted");
  };


  validateProperty = ({name,value}) => {
    if(name==='username'){
      if(value.trim()==='')return 'Username is required';
    }
    if(name==='password'){
      if(value.trim()==='')return 'Password is required';
    }
  }


  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name]=errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account,errors:errors || {} });
  };


  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              id="username"
              name={"username"}
              label="Username"
              type="text"
              value={account.username}
              onChange={this.handleChange}
              error={this.state.errors.username}
            />
            <Input
              id="password"
              name={"password"}
              label="Password"
              type="password"
              value={account.password}
              onChange={this.handleChange}
              error={this.state.errors.password}
            />

            {/* <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={account.password}
                onChange={this.handleChange}
                className="form-control"
              />
            </div> */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        {/* </form> */}
      </React.Fragment>
    );
  }
}

export default LoginForm;
