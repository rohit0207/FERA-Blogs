import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage(props) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header un={props.un} user={props.user}/>
      <div className="home">
        <Posts allPosts={props.allPosts}/>
        {/* {props.user && <Sidebar />} */}
      </div>
    </>
  );
}
