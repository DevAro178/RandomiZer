const PasswordGenSection = () => {
  return (
    <div className="Flex-Justify-align-center spacer-bottom">
      <div className="PassGenDiv">
        <p className="heading">Generate Password</p>
        <div>
          <div className="options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
            >
              <rect
                y="4"
                width="40"
                height="12"
                rx="6"
                fill="#F1B768"
                fillOpacity="0.75"
              />
              <rect x="20" width="20" height="20" rx="10" fill="#EB9928" />
            </svg>
            <p className="labeltext">Numerics</p>
          </div>
          <div className="options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
            >
              <g clipPath="url(#clip0_2_1106)">
                <rect y="4" width="40" height="12" rx="6" fill="#2F4858" />
                <path
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                  fill="#5F788A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1106">
                  <rect width="40" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="labeltext">Alphabets</p>
          </div>
          <div className="options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
            >
              <rect
                y="4"
                width="40"
                height="12"
                rx="6"
                fill="#F1B768"
                fillOpacity="0.75"
              />
              <rect x="20" width="20" height="20" rx="10" fill="#EB9928" />
            </svg>
            <p className="labeltext">Special Characters</p>
          </div>
        </div>
        <div className="inputDiv">
          <p className="generatedPass">KgW5MNx!Pb6Ygr*</p>
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
        <div className="GenerateButton">Generate</div>
      </div>
    </div>
  );
};

export default PasswordGenSection;
