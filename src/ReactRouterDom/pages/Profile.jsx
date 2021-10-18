
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
import "../style.css";

const Profile = ({ isLogin }) => {
  // const history = useHistory();

  /*useEffect(() => {
    if (!isLogin) {
      history.push("/");
    }
  }, [isLogin]);*/

  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Profile Page</h2>
      <ul className="nav">
        <li>
          <Link to={`${url}/view-profile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/edit-profile`}>Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/view-profile`} component={ViewProfile} />
        <Route path={`${path}/edit-profile`} component={EditProfile} />
      </Switch>
    </>

  );
}

export default Profile;
