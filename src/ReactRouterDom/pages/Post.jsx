import {useLocation} from "react-router-dom";

const Post = ({ match }) => {
  const location = useLocation();
  // const params = useParams();

  console.log(location);

  const search = new URLSearchParams(location.search);

  const { id } = match.params;

  return (
    <>
      <h2>POST with id {id}</h2>
      <p>{search}</p>
      <p>{ location.state.text }</p>
    </>
  );
}

export default Post;
