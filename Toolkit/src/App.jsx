import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store";

export default function App() {
  const count = useSelector((state) => state.counter.value); //useSelector 사용하여 count 값 가져오기
  const dispatch = useDispatch(); //훅 사용하기

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}
