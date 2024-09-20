import profile from "../assets/pexels-moh-adbelghaffar-771742.jpg";

const userdata = ({ userdata }) => {
  return (
    <div className="container">
      <div className="usercontainer">
        <div className="main-details">
          <img
            src={userdata.avatar_url ? userdata.avatar_url : profile}
            alt=""
          />
          <div className="name">
            <h2>{userdata.login}</h2>
            <a href={userdata.html_url}>{userdata.html_url}</a>
          </div>
        </div>
        <div className="followers common">
          <h2>followers</h2>
          <h3>{userdata.followers}</h3>
        </div>
        <div className="following common">
          <h2>following</h2>
          <h3>{userdata.following}</h3>
        </div>
        <div className="public common">
          <h2>Public Repos</h2>
          <h3>{userdata.public_repos}</h3>
        </div>
      </div>
    </div>
  );
};

export default userdata;
