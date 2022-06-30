import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, loginoutfunc] = useState(false);
  function signinout(event){
    loginoutfunc(!currentUser);
  }

  const [allPosts, addPost] = useState([]);

  function buildPost(post){
    addPost((prevPosts) => {
      return [...prevPosts, post];
    });
  }

  const [allUsers, addUser] = useState([]);
  function newUser(user){
    addUser((prevAllUser) => {
      return [...prevAllUser, user];
    });
  }

  const [nowuser, regUser] = useState({
    un: "",
    email: "",
    pass: ""
  });

  function setNowUser(prof){
    regUser(prof);
  }

  function delUser(user){
    loginoutfunc(!currentUser);
    addUser((prevUser) => {
      return prevUser.filter((userItem) => {
        if(userItem.un !== user.un){
          return userItem;
        }
        return null;
      })
    });
  }

  return (
    <Router>
      <Topbar user={currentUser} signout={signinout}/>
      <Switch>
        <Route exact path="/">
          <Homepage allPosts={allPosts} user={currentUser} un={nowuser.un}/>
        </Route>
        <Route path="/posts">
          <Homepage allPosts={allPosts} user={currentUser} un={nowuser.un}/>
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage allPosts={allPosts} user={currentUser} un={nowuser.un}/> : <Register signin={signinout} newUser={newUser}/>}
        </Route>
        <Route path="/login">
          {currentUser ? <Homepage allPosts={allPosts} user={currentUser} un={nowuser.un}/> : <Login signin={signinout} allUsers={allUsers} setNowUser={setNowUser}/>}
        </Route>
        {allPosts.map((post, index) => {
          return(
          <Route path={"/post/" + index}>
            <Single title={post.title} story={post.story} author={post.author}/>
          </Route>);
        })}
        <Route path="/write">
          {currentUser ? <Write user={nowuser} buildPost={buildPost}/> : <Login signin={signinout} allUsers={allUsers} setNowUser={setNowUser}/>}
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings user={nowuser} delUser={delUser}/> : <Login signin={signinout} allUsers={allUsers} setNowUser={setNowUser}/>}
        </Route>
        <Route path="/logout">
          {currentUser ? <Homepage allPosts={allPosts} user={currentUser} un={nowuser.un}/> : <Login signin={signinout} allUsers={allUsers} setNowUser={setNowUser}/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
