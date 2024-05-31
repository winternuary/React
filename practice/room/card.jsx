import Rooms from "../Rooms.js";
import Router from "../Router.jsx";

import "../styles.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Router />
      <div id="wrapper">
        {rooms.map((room) => (
          <div className="box" key={room.key}>
            <img
              onClick={() => navigate("/detail/" + room.key)}
              className="boximage"
              src={room.image}
            />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;