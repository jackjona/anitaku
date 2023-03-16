import React from "react";

const TypeButton = (props) => {
  return (
    <button
      className="bg-blue-200 dark:bg-blue-900 p-4 m-2 rounded-2xl text-xl font-bold w-18 capitalize"
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
