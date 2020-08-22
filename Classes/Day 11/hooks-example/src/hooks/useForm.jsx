import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({
        ...values, // 'email':"satyambhalla17@gmail.com",'password': '124578584554'
        [e.target.name]: e.target.value,  // if name is email -> 'email':"updated email",'password': '124578584554'
      });
    },
  ];
};
