import React, { useState } from "react";
import { FaAlignJustify, FaRegUser } from "react-icons/fa";
import "./loginform_elements.css";
import axios from "axios";
function App() {
  // React States
 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];


 


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let { uname, pass } = document.forms[0];
  //   try {
      
  //     const response = await axios.post("/login/login", { uname, pass });
  //     console.log(">>",response.data);
  //     let userData = response.data

  //     if (userData) {
  //       if (userData.password !== pass.value) {
  //         // Invalid password
  //         setErrorMessages({ name: "pass", message: errors.pass });
  //       } else {
  //         setIsSubmitted(true);
  //       }
  //     } else {
  //       // Username not found
  //       setErrorMessages({ name: "uname", message: errors.uname });
  //     }
  //   } catch (error) {
  //     setErrorMessages("Invalid email or password");
  //   }
  // };
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];
    console.log("uname",uname.value);
    let userName = uname.value
    let password = pass.value
    
    axios.post('http://localhost:7777/login/login', {
    // data to be sent in the POST request
    userName,
    password
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
        
        <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit" name="submit" >Submit</button>
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="app">
      <div className="login-form">
      <img src={require('../../img/timeline.png')} alt="Logo"   width="75px" height="50px" />

        <div className="title">LOGIN</div>
        
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default App;