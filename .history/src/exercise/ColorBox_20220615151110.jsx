import React, { useState } from "react";
import styled from "style-components";
const colors = ["#1B1A17", "#F0A500", "#E45826", "#E6D5B8"];

const StyledDiv = styled.div`
  padding: 4rem;
  color: black;
  float: left;
`;

const colorApp = () => {
  const [boardCastBg, setBoardCastBg] = useState("");

  return <div className="colorBox"></div>;
};

export default colorApp;
