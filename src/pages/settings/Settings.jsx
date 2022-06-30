import "./settings.css";
import pp from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/pp.jpg"

export default function Settings(props) {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Your Account</span>
          <span onClick={() => props.delUser(props.user)} className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={pp}
              alt=""
            />
            {/* <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label> */}
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={props.user.un} name="name" disabled="true"/>
          <label>Email</label>
          <input type="email" placeholder={props.user.email} name="email" disabled="true"/>
          <label>Password</label>
          <input type="password" placeholder={props.user.pass} name="password" disabled="true"/>
          {/* <button className="settingsSubmitButton" disabled="true">
            Update
          </button> */}
        </form>
      </div>
    </div>
  );
}
