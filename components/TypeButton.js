import React from "react";

const TypeButton = (props) => {
  return (
    <button
      onClick={() => {
        props.imageType === props.type
          ? props.handleClick()
          : props.setImageType(props.type);
      }}
    >
      {props.type}
    </button>
  );
};

export default TypeButton;
