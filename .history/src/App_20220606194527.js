import "./App.css";
import ButtonLike from "./components/ButtonLike";
import TitleSimple from "./components/TitleSimple";
import StateFullComponent from "./components/StateFullComponent";
import StateObject from "./pages/StateObject";
import ConditionalRender from "./pages/conditionalRender";
import LiftingStateUp from "./exercise/LiftingStateUp";
import GenerateBox from "./exercise/GenerateBox";
import Hook from "./pages/Hook";
function App() {
  const isLoading = true;
  // varible render html
  const ele1 = (
    <div>
      <h1>h1 variable render html</h1>
      <h2> variable render html</h2>
    </div>
  );
  return (
    <div className="App">
      <div>function render html</div>
      {isLoading ? <TitleSimple /> : "123"}
      {ele1}
      <br />
      <h4> ButtonLike in Page A</h4>
      <ButtonLike
        text="Cancel"
        type="button"
        className="buttonA"
        onClick={() => {
          console.log("buttonA");
        }}
        name="tu"
      />
      <h4> ButtonLike in Page B</h4>
      <ButtonLike
        type="submit"
        className="buttonB"
        onClick={() => {
          console.log("buttonB");
        }}
        name="thuan"
      />
      <h2>State full component</h2>
      <StateFullComponent />
      {/* <StateObject />
       */}
      <ConditionalRender />
      <h3>LiftingStateUp</h3>
      <LiftingStateUp />
      <h3>GenerateBox</h3>
      <GenerateBox />
      <h3>Hook</h3>
      <Hook />
    </div>
  );
}

export default App;
