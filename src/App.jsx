import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    fristName: "",
    lastname: "",
    email: "",
  });

  const [submitted,setSubmitted] = useState(false);

  const [valid,setValid] = useState(false);

  const handelFirstNameIC = (e) => {
    setValues({ ...values, fristName: e.target.value });
  };
  const handellastNameIC = (e) => {
    setValues({ ...values, lastname: e.target.value });
  };
  const handelEmailIC = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handelSubmit = (e) =>{
    e.preventDefault();
    if(values.fristName && values.lastname && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handelSubmit}>
        {submitted && valid ? <div className="success-message">Success! thanks for registering</div> : null}
        <input
          onChange={handelFirstNameIC}
          value={values.fristName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.fristName ? <span>Please Enter your First Name</span> : null}

        <input
          onChange={handellastNameIC}
          value={values.lastname}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastname ? <span>Please Enter your Last Name</span> : null}

        <input
          onChange={handelEmailIC}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ?<span>Please Enter your Email Address</span>:null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
