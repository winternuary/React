import { useParams } from "react-router-dom"; //1. useParams을 import
import Rooms from "../Rooms.js";
export default function Detail() {
  //2. useParams()를 이용하여 파라미터로 {id} 받기
  const { id } = useParams();
  console.log(id);

  let room = Rooms.filter((item) => item.key == id); //3. rooms의 key값과 id값이 일치하는 값 저장(filter 사용)
  let result = room[0];
  // let result = Rooms[id];
  console.log(result.name);

  return (
    <div className="container">
      <div className="box image">
        <img src={result.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{result.location} </div>
        <div className="location">{result.location}에 위치</div>
        <div className="title">{result.title}</div>
        <hr />
        <div className="guest">최대인원{result.guest} 명</div>
        <div className="rating">
          평점: {result.rating}{" "}
          <span className="visits">({result.visits})</span>
        </div>
        <div className="price">
          {result.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}
