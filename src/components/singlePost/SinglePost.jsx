import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost(props) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {props.title}
          <div className="singlePostEdit">
            {/* <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i> */}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {props.author}
              </Link>
            </b>
          </span>
          {/* <span>1 day ago</span> */}
        </div>
        <p className="singlePostDesc">
          {props.story}
        </p>
      </div>
    </div>
  );
}
