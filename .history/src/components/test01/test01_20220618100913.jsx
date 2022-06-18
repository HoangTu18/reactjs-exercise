import React from "react";
import Button from "./component/Button";
import Count from "./component/Count";
import Title from "./component/Title";

function test01(props) {
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

export default test01;
