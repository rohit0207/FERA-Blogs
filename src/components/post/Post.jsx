import { Link } from "react-router-dom";
import sf from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/sf.jpg"
import "./post.css";

export default function Post(props) {
  return (
    <div id={props.id} className="post">
      <img
        className="postImg"
        /* actually i have to use props.image */
        src={sf}
        alt="Background"
      />
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={"/post/" + props.id} className="link">
            {props.title}
          </Link>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Author: {props.author}
            </Link>
          </span>
        </span>
        <hr />
        {/* <span className="postDate">1 hour ago</span> */}
      </div>
      <p className="postDesc">
        {props.story}
      </p>
    </div>
  );
}
