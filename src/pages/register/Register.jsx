import { Link } from "react-router-dom";
import { useState } from "react";
import rimage from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/reg.jpg"
import "./register.css"

export default function Register(props) {
    const [user, regUser] = useState({
      un: "",
      email: "",
      pass: ""
    });
    
    function reg(event){
      const {name, value} = event.target;
      regUser((prevUser) => {
        return {
          ...prevUser,
          [name]: value
        }
      });
    }

    function signup(event){
      props.newUser(user);

      regUser({
        un: "",
        email: "",
        pass: ""
      });

      event.preventDefault();
    }
  
    return (
      <div className="register" style={{ backgroundImage: `url(${rimage})` }}>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input name="un" value={user.un} onChange={reg} className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input name="email" value={user.email} onChange={reg} className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input name="pass" value={user.pass} onChange={reg} className="registerInput" type="password" placeholder="Enter your password..." />
        <button onClick={signup} className="registerButton">Register</button>
      </form>
      <Link className="link" to="/login"><button className="registerLoginButton">Login</button></Link>
    </div>
    )
}
