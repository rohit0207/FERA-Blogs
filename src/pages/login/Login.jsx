import { Link } from "react-router-dom";
import { useState } from "react";
import limage from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/log.jpg"
import "./login.css";

export default function Login(props) {
  const [user, takeUser] = useState({
    email: "",
    pass: ""
  });
  
  function cred(event){
    const {name, value} = event.target;
    takeUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value
      }
    });
  }

  function checkUser(event){
    for(var i=0; i<props.allUsers.length; i++){
      if(props.allUsers[i].email === user.email & props.allUsers[i].pass === user.pass){
        props.signin();
        props.setNowUser({
          un: props.allUsers[i].un,
          email: props.allUsers[i].email,
          pass: props.allUsers[i].pass
        });
        break;
      }
    }

    event.preventDefault();
  }

  return (
    <div className="login" style={{ backgroundImage: `url(${limage})` }}>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input name="email" value={user.email} onChange={cred} className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input name="pass" value={user.pass} onChange={cred} className="loginInput" type="password" placeholder="Enter your password..." />
        <button onClick={checkUser} className="loginButton">Login</button>
      </form>
      <Link className="link" to="/register"><button className="loginRegisterButton">Register</button></Link>
    </div>
  );
}
