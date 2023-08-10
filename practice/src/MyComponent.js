const MyComponent = ({ name, children }) => {
  // props -> properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "이름을 정해주세용",
};

export default MyComponent;
