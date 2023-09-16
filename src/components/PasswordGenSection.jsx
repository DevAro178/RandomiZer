import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { GenpassLogic, generateRandomString } from "./logics";

const PasswordGenSection = () => {
  const [isCheckedNumerics, setIsCheckedNumerics] = useState(true);
  const [isCheckedAlphabets, setIsCheckedAlphabets] = useState(true);
  const [isCheckedCharacters, setIsCheckedCharacters] = useState(true);
  const [char, setChar] = useState(null);
  const [generatedPass, setGeneratedPass] = useState("Click the Button");
  const handleToggleNumerics = (checked) => {
    setIsCheckedNumerics(checked);
  };
  const handleToggleAplhabets = (checked) => {
    setIsCheckedAlphabets(checked);
  };
  const handleToggleCharacters = (checked) => {
    setIsCheckedCharacters(checked);
  };

  const setCharacters = (val) => {
    setChar(val);
  };

  const GeneratethePass = () => {
    generateRandomString(char);
    setGeneratedPass(generateRandomString(char));
  };

  useEffect(() => {
    GenpassLogic(
      setCharacters,
      isCheckedNumerics,
      isCheckedAlphabets,
      isCheckedCharacters
    );
  }, [isCheckedCharacters, isCheckedAlphabets, isCheckedNumerics]);

  // useEffect(() => {
  //   console.log(char);
  // }, [char]);

  return (
    <div className="Flex-Justify-align-center spacer-bottom">
      <div className="PassGenDiv">
        <p className="heading">Generate Password</p>
        <div>
          <div className="options">
            <ToggleSwitch onToggle={handleToggleNumerics} />
            <p className="labeltext">Numerics</p>
          </div>
          <div className="options">
            <ToggleSwitch onToggle={handleToggleAplhabets} />
            <p className="labeltext">Alphabets</p>
          </div>
          <div className="options">
            <ToggleSwitch onToggle={handleToggleCharacters} />
            <p className="labeltext">Special Characters</p>
          </div>
        </div>
        <div className="inputDiv">
          <p className="generatedPass">{generatedPass}</p>
          <div className="CopyButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
                stroke="#2F4858"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
                stroke="#2F4858"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="GenerateButton" onClick={GeneratethePass}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default PasswordGenSection;
