import MyComponent from "./practice/MyComponent";
import Counter from "./practice/state";
import Say from "./practice/UseState";
import State from "./practice/UseStatee";
import EventPractice from "./practice/EventPractice";
import IterationSample from "./practice/IterationSample";

function App() {
  return (
    <div>
      <MyComponent>나는야 애깅</MyComponent>
      <Counter />
      <Say />
      <State />
      <EventPractice />
      <IterationSample />
    </div>
  );
}

export default App;
