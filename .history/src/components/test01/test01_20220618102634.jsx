import React from "react";
import { useState } from "react";
import Button from "./component/Button";
import Count from "./component/Count";
import Title from "./component/Title";

function Test01(props) {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>Increment Agea</Button>
      <br />
      <Count text="Salary" count={salary} />
      <Button onClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default Test01;
