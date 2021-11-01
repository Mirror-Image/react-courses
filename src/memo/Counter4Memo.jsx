import {memo} from "react";

const arePropsEqual = (prevProps, newProps) => {
  const { value, handleClick, dirtyObject } = prevProps;
  const { value: newValue, handleClick: newHandleClick, dirtyObject: newDirtyObject } = newProps;

  return (
    value === newValue
    && handleClick === newHandleClick
    && dirtyObject === newDirtyObject
  );
}

const Counter4Memo = ({ value, handleClick }) => {
  console.log("PureCounter 4 is calling");
  return (
    <div>
      <h2>Counter 4</h2>
      <h3>{value}</h3>
      <button onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default memo(Counter4Memo, arePropsEqual);
