import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {
        props.allPosts.map((post, index) => {
          return (
            <Post 
              key={index}
              id={index}
              image={post.image}
              title={post.title}
              story={post.story}
              author={post.author}
            />
          );
        })
      }
    </div>
  );
}
