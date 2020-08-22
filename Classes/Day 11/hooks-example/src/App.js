import React, { useState } from "react";
import "./App.css";
import { useForm } from "./hooks/useForm";

const App = () => {
  // const [counter, setCounter] = useState({ count1: 0, count2: 10 });
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [values, setValues] = useForm({ email: "", password: "" });
  const [values2,setValues2] = useForm({firstname: "",lastname: ""});

  return (
    <React.Fragment>
      {/* <button
        onClick={() =>
          setCounter({ count1: counter.count1 + 1, count2: counter.count2 + 1 })
        }
      >
        Increment
      </button>

      <h2>{counter.count1}</h2>
      <h2>{counter.count2}</h2> */}

      <div>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={setValues}
        />
        <input
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={setValues}
        />
         <input
          name="firstname"
          placeholder="First Name"
          value={values2.firstname}
          onChange={setValues2}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          value={values2.lastname}
          onChange={setValues2}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
