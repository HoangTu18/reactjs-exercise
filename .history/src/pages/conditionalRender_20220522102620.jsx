import React, { useState } from "react";
import ButtonSimple from "../components/ButtonSimple";

function ConditionalRender() {
  //   const array = [1, 2, 3, 4, 5];
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
  function renderButton() {}

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
    </div>
  );
}

export default ConditionalRender;
