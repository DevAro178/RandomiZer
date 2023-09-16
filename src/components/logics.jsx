import randomStrings from "../assets/random_strings.json";
export const StringFromArray = () => {
  let arr = randomStrings;
  return arr[Math.floor(Math.random() * 100)];
};
export const GenpassLogic = (setCharacters, Number, alpha, char) => {
  if (Number && alpha && char) {
    setCharacters(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    );
  } else if (Number && alpha) {
    setCharacters(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    );
  } else if (Number && char) {
    setCharacters("0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=");
  } else if (alpha && char) {
    setCharacters(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-="
    );
  } else if (Number) {
    setCharacters("0123456789");
  } else if (alpha) {
    setCharacters("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
  } else if (char) {
    setCharacters("!@#$%^&*()_+~`|}{[]:;?><,./-=");
  } else {
    setCharacters(null);
  }
};

export const generateRandomString = (characters) => {
  // console.log(characters);
  if (characters != null) {
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < 75; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  } else {
    return "Select something!!!";
  }
};
