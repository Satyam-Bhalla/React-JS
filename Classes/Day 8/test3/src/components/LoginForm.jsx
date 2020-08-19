import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class LoginForm extends Component {
  // username = React.createRef();
  componentDidMount() {
    console.clear();
  }
  // constructor(){
  //   super();

  // }

  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.account, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
    // const errors = {};
    // const { account } = this.state;

    // if (account.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (account.password.trim() === "") {
    //   errors.password = "Password is required";
    // }
    // // console.log(Object.keys(errors));
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    // API Call
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = {[name]:value};
    // console.log(obj);
    const schema = {[name]: this.schema[name]}
    // console.log(schema);
    const result = Joi.validate(obj,schema);
    console.log(result);
    const {error} = result;
    console.log(error);
    return error ? error.details[0].message : null
    // if(result.error) return null;

    // return error.details[0].message;
    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required";
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required";
    // }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors: errors || {} });
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
            <button type="submit" disabled={this.validate()} className="btn btn-primary">
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
