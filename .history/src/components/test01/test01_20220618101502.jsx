import React from "react";
import { useState } from "react";
import Button from "./component/Button";
import Count from "./component/Count";
import Title from "./component/Title";

function Test01(props) {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button></Button>
      <br />
      <Count text="Salary" count={salary} />
      <Button></Button>
    </div>
  );
}

export default Test01;
