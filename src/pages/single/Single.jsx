import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single(props) {
  return (
    <div className="single">
      <SinglePost title={props.title} story={props.story} author={props.author}/>
    </div>
  );
}
