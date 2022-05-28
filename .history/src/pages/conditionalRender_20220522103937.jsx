import React, { useState } from "react";
import ButtonSimple from "../components/ButtonSimple";

function ConditionalRender() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react",
    },
    {
      id: 2,
      title: "angular",
    },
  ]);
  const [isAuth, setIsAuth] = useState(false);
  let button = null;
  if (isAuth) {
    button = <ButtonSimple text="logout" />;
  } else {
    button = <ButtonSimple text="login" />;
  }

  function renderButtonLogin() {
    return <ButtonSimple text="login" />;
  }
  function renderButtonLogout() {
    return <ButtonSimple text="logout" />;
  }
  function renderButton() {
    return <div>{isAuth ? renderButtonLogout() : renderButtonLogin()}</div>;
  }

  return (
    <div>
      {/* {array.length > 0 &&
        array.map((item) => {
          return <div key={item}>This is item</div>;
        })} */}
      <ButtonSimple
        text="Check Auth"
        onClick={() => setIsAuth((prevState) => !prevState)}
      />
      <br />
      State auth: {isAuth.toString()}
      {isAuth ? <div>welcome to {button}</div> : <div>Guest {button}</div>}
      <h6>Render with func</h6>
      {isAuth ? renderButtonLogout() : renderButtonLogin()}
      <h3>LIST key</h3>
      {todos.length > 0 ? {} : null}
    </div>
  );
}

export default ConditionalRender;
