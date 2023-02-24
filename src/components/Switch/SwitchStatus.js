import React from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../../state/switch";
import SwitchSelector from "react-switch-selector";

export default function Switch({
  firstLabel,
  firstValue,
  thirdLabel,
  thirdValue,
  fourthLabel,
  fourthValue,
  fifthLabel,
  fifthValue,
}) {
  const dispatch = useDispatch();
  const options = [
    {
      label: <span>{firstLabel}</span>,
      value: { firstValue },
      selectedBackgroundColor: "#00aae4",
    },
    {
      label: <span>{thirdLabel}</span>,
      value: { thirdValue },
      selectedBackgroundColor: "#00aae4",
    },
    {
      label: <span>{fourthLabel}</span>,
      value: { fourthValue },
      selectedBackgroundColor: "#00aae4",
    },
    {
      label: <span>{fifthLabel}</span>,
      value: { fifthValue },
      selectedBackgroundColor: "#00aae4",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === { firstValue }
  );

  const onChange = (newValue) => {
    let { firstValue, thirdValue, fourthValue, fifthValue } =
      newValue;
    firstValue && dispatch(setStatus({ status: firstValue }));
    thirdValue && dispatch(setStatus({ status: thirdValue }));
    fourthValue && dispatch(setStatus({ status: fourthValue }));
    fifthValue && dispatch(setStatus({ status: fifthValue }));
  };
  return (
    <div
      className="your-required-wrapper"
      style={{ width: "500px", height: 40, marginLeft: "10px" }}
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
