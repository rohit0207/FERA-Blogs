import "./write.css";
import ls from "C:/Users/Rohit Mantri/Dropbox/PC/Documents/Projects/FERA Blogs/src/images/ls.jpg"
import { useState } from "react";

export default function Write(props) {
  const [post, createPost] = useState({
    author: props.user.un,
    title: "",
    story: ""
  });

  function formPost(event){
    const {name, value} = event.target;
    createPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value
      }
    });
  }

  function publish(event){
    props.buildPost(post);

    createPost({
      author: props.user.un,
      title: "",
      story: ""
    });

    event.preventDefault();
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src={ls}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <input
            name="title"
            value={post.title}
            onChange={formPost}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="story"
            value={post.story}
            onChange={formPost}
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <br />
        <button onClick={publish} className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
