import { useState } from "react";
import Userdata from "./userdata";
// import { useEffect } from "react";
const Getuser = () => {
  const [username, setusername] = useState("mohammed-rizwan");
  const [userdata, setuserdata] = useState("mohammed-rizwan");
  async function fetchdata() {
    const res = await fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
    console.log(res);
    setuserdata(res);
  }

  return (
    <>
      <div className="first">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search...."
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <button type="button" onClick={fetchdata}>
          Search
        </button>
      </div>
      <Userdata userdata={userdata} />
    </>
  );
};

export default Getuser;
