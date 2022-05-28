import React, { useState } from "react";
import ButtonSimple from "../components/ButtonSimple";

function ConditionalRender() {
  //   const array = [1, 2, 3, 4, 5];
  const [isAuth, setIsAuth] = useState(false);
  let button = null;
  if (isAuth) {
    return <ButtonSimple text="logout" />;
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
      State auth: {isAuth ? "logined" : "not login"}
    </div>
  );
}

export default ConditionalRender;
