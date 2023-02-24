import React from "react";
import { useDispatch } from "react-redux";
import { setSwitch } from "../../state/switch";
import SwitchSelector from "react-switch-selector";

export default function Switch({
  firstLabel,
  secondLabel,
  firstValue,
  secondValue,
}) {
  const dispatch = useDispatch();
  const options = [
    {
      label: <span>{firstLabel}</span>,
      value: { firstValue },
      selectedBackgroundColor: "#00aae4",
    },
    {
      label: <span>{secondLabel}</span>,
      value: { secondValue },
      selectedBackgroundColor: "#00aae4",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === { secondValue }
  );

  const onChange = (newValue) => {
    let { firstValue, secondValue } = newValue;
    firstValue && dispatch(setSwitch({ switch: firstValue }));
    secondValue && dispatch(setSwitch({ switch: secondValue }));
  };
  return (
    <div
      className="your-required-wrapper"
      style={{ width: "200px", height: 40, marginLeft: "10px" }}
    >
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#red"}
        fontColor={"#252850"}
        border={"1px solid #0097e6"}
      />
    </div>
  );
}
