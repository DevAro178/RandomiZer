import { useState } from "react";
import ReactSwitch from "react-switch";

const ToggleSwitch = ({ onToggle }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
    onToggle(val);
  };

  return (
    <div className="">
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor="#be9458"
        onHandleColor="#eb9928"
        offColor="#2e4857"
        offHandleColor="#5f798a"
      />
    </div>
  );
};

export default ToggleSwitch;
