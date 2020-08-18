import React, { Component } from "react";

const Input = ({name,label,value,onChange,id,type,error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        // ref={this.username}
        id={id}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
