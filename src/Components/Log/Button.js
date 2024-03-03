import React from "react";

const Button = ({ contant, className, HandelBtn }) => {
  return (
    <button onClick={() => HandelBtn(contant)} className={className}>
      {contant}
    </button>
  );
};

export default Button;
