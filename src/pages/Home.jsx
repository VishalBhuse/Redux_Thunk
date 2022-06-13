import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getfeedapi } from "../Store/Feed/fedd.actions";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data,getfeed} = useSelector((state)=>state.feed)
  const {isAuthenticated} = useSelector((state)=>state.auth);
  useEffect(()=>{
    if(data.length === 0){
      dispatch(getfeedapi())
    }
  },[]);
  
  console.log(isAuthenticated)
  if(isAuthenticated){
    navigate('/login');
        
  }

  // if(getfeed.loading) return <div>Loading....</div>
  // if(getfeed.error) return <div>Error....</div>
  
  return (
    <div>
      <h1>Home</h1>
      <br />
      {getfeed.loading && <div>Loading...</div>}
      {getfeed.error && <div>Error...</div>}
  {
    !getfeed.loading &&   
      data.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
