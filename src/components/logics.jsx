import randomStrings from "../assets/random_strings.json";
export const StringFromArray = () => {
  let arr = randomStrings;
  return arr[Math.floor(Math.random() * 100)];
};
