import React, { useEffect, useState } from "react";
import Button from "./Log/Button";
import commfy from "./App/commfy";

const CalcNum = () => {
  const [Value, setValue] = useState("0");
  const [Oberator, setOberator] = useState(null);
  const [Memory, setMemory] = useState(null);
  const [Larg, setLarg] = useState(false);

  useEffect(() => {
    if (Value.length > 7) {
      setLarg(true);
    }
  }, [Value.length, Value, Larg]);

  const HandelBtn = (contant) => {
    const Num = parseFloat(Value);
    if (contant === "AC") {
      setValue("0");
      setMemory(null);
      setOberator(null);
      setLarg(false);
      return;
    }
    if (contant === "%") {
      setValue(Num / 100);
      setMemory(null);
      setOberator(null);
      return;
    }

    if (contant === "+/-") {
      setValue(Num * -1);
      return;
    }

    if (contant === ".") {
      if (Value.includes(".")) return;
      setValue(Value + ".");
      return;
    }

    if (contant === "+") {
      if (Oberator !== null) {
        if (Oberator === "+") {
          setMemory(Memory + parseFloat(Value));
        } else if (Oberator === "x") {
          setMemory(Memory * parseFloat(Value));
        } else if (Oberator === "/") {
          setMemory(Memory / parseFloat(Value));
        } else if (Oberator === "-") {
          setMemory(Memory - parseFloat(Value));
        }
      } else {
        setMemory(parseFloat(Value));
      }
      setMemory(parseFloat(Value));
      setValue("0");
      setOberator("+");
      return;
    }
    if (contant === "x") {
      if (Oberator !== null) {
        if (Oberator === "+") {
          setMemory(Memory + parseFloat(Value));
        } else if (Oberator === "x") {
          setMemory(Memory * parseFloat(Value));
        } else if (Oberator === "/") {
          setMemory(Memory / parseFloat(Value));
        } else if (Oberator === "-") {
          setMemory(Memory - parseFloat(Value));
        }
      } else {
        setMemory(parseFloat(Value));
      }
      setMemory(parseFloat(Value));
      setValue("0");
      setOberator("x");
      return;
    }
    if (contant === "/") {
      if (Oberator !== null) {
        if (Oberator === "+") {
          setMemory(Memory + parseFloat(Value));
        } else if (Oberator === "x") {
          setMemory(Memory * parseFloat(Value));
        } else if (Oberator === "/") {
          setMemory(Memory / parseFloat(Value));
        } else if (Oberator === "-") {
          setMemory(Memory - parseFloat(Value));
        }
      } else {
        setMemory(parseFloat(Value));
      }
      setMemory(parseFloat(Value));
      setValue("0");
      setOberator("/");
      return;
    }
    if (contant === "-") {
      if (Oberator !== null) {
        if (Oberator === "+") {
          setMemory(Memory + parseFloat(Value));
        } else if (Oberator === "x") {
          setMemory(Memory * parseFloat(Value));
        } else if (Oberator === "/") {
          setMemory(Memory / parseFloat(Value));
        } else if (Oberator === "-") {
          setMemory(Memory - parseFloat(Value));
        }
      } else {
        setMemory(parseFloat(Value));
      }
      setMemory(parseFloat(Value));
      setValue("0");
      setOberator("-");
      return;
    }
    if (contant === "=") {
      if (!Oberator) return;

      if (Oberator === "+") {
        setValue((Memory + parseFloat(Value)).toString());
      } else if (Oberator === "x") {
        setValue((Memory * parseFloat(Value)).toString());
      } else if (Oberator === "/") {
        setValue((Memory / parseFloat(Value)).toString());
      } else if (Oberator === "-") {
        setValue((Memory - parseFloat(Value)).toString());
      }

      setMemory(null);
      setOberator(null);
      return;
    }

    if (Value[Value.length - 1] === ".") {
      setValue(Value + contant);
    } else {
      setValue(parseFloat(Num + contant).toString());
    }
  };

  return (
    <main>
      <img src="images/iphone.png" alt="iphone.png" />
      <div class="container">
        <div class="panel">
          <p
            class={`result ${Larg ? "SizeSM" : "SizeXXL"} ${
              Value.length >= 11 && "Size_X_SM"
            }`}
          >
            {commfy(Value)}
          </p>
        </div>
        <table>
          <tr>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"AC"}
                className={"btn especial"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"+/-"}
                className={"btn especial"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"%"}
                className={"btn especial"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"/"}
                className={"btn operator"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"7"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"8"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"9"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"x"}
                className={"btn operator"}
              />
            </td>
          </tr>

          <tr>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"4"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"5"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"6"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"-"}
                className={"btn operator"}
              />
            </td>
          </tr>

          <tr>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"1"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"2"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"3"}
                className={"btn number"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"+"}
                className={"btn operator"}
              />
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <Button
                HandelBtn={HandelBtn}
                contant={"0"}
                className={"btn number zeroo "}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"."}
                className={"btn decimal"}
              />
            </td>
            <td>
              <Button
                HandelBtn={HandelBtn}
                contant={"="}
                className={"btn operator"}
              />
            </td>
          </tr>
        </table>
      </div>
    </main>
  );
};

export default CalcNum;
