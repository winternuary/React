import Rooms from "../Rooms.js";
import Router from "../Router.jsx";
import axios from "axios";
import { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
const HomeAxios = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(Rooms);


  return (
    <>
      <Router />
      <div id="wrapper">
        {Rooms.map((room) => (
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
      <button onClick={()=>{
				axios.get("https://mikki32sw.github.io/airanb/data.json")
				.then((결과)=>{
				console.log(결과.data)
				})
				.catch(()=>{console.log('실패함')})
				}}>버튼</button>
    </>
  );
};
export default HomeAxios;
