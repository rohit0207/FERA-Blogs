import "./header.css";
import bimage from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/bg.jpg"

export default function Header(props) {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">{props.user && <div>Welcome {props.un}</div>}</span>
        <span className="headerTitleLg">FERA BLOGS</span>
      </div>
      <img
        className="headerImg"
        src={bimage}
        alt=""
      />
    </div>
  );
}
