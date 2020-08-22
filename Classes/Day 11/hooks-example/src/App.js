import React, { useState, useEffect } from "react";

import {Hello} from './components/Hello';

import { useForm } from "./hooks/useForm";
import {useFetch} from './hooks/useFetch';

const App = () => {
  // const [counter, setCounter] = useState({ count1: 0, count2: 10 });
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [values, setValues] = useForm({ email: "", password: "" });
  const [values2, setValues2] = useForm({ firstname: "", lastname: "" });
  const [count,setCount] = useState(0);
  const [showHello,setShowHello] = useState(true);

  

  const {data,loading} = useFetch(`http://numbersapi.com/${count}/math`);
  // useEffect(() => {
  //   // window.location.reload(false);
  //   console.log("Use effect function in progress");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [values.password]);

  return (
    <React.Fragment>
      {loading? "Loading...":data}
      {/* <button
        onClick={() =>
          setCounter({ count1: counter.count1 + 1, count2: counter.count2 + 1 })
        }
      >
        Increment
      </button>

      <h2>{counter.count1}</h2>
      <h2>{counter.count2}</h2> */}
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <button onClick={()=>setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
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
