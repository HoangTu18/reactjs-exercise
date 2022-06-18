import React from "react";
import Button from "./component/Button";
import Count from "./component/Count";
import Title from "./component/Title";

function Test01(props) {
  return (
    <div>
      <Title />
      <Count />
      <Button />
      <br />
      <Count />
      <Button />
    </div>
  );
}

export default Test01;
