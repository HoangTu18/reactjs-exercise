import React from "react";
import PropTypes from "prop-types";

StateFullComponent.propTypes = {};

function StateFullComponent(props) {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      This is state full component: {count}
      <button type="button" onClick={() => {
          setCount{prevState => prevState + 1}
      }}>Count</button>
    </div>
  );
}

export default StateFullComponent;
