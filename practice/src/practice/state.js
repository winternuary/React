//클래스형 컴포넌트의 state
import { Component } from "react";

class Counter extends Component {
  // state의 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          {" "}
          +1{" "}
        </button>
      </div>
    );
  }
}

export default Counter;
