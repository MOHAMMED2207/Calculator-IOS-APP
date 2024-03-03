import React from "react";

const commfy = (Value) => {
  let output = "";
  let decimal = "";
  let isNag = false;

  if (Value === "0") return Value;

  if (Value.includes(".")) {
    output = Value.substring(0, Value.indexOf("."));
    decimal = Value.substring(Value.indexOf("."));
  } else {
    output = Value;
  }

  if (parseFloat(Value) < 0) {
    isNag = true;
    output = output.substring(1);
  }

  return isNag
    ? "-" + parseFloat(output).toLocaleString() + decimal
    : parseFloat(output).toLocaleString() + decimal;
};

export default commfy;
