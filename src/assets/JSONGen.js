const fs = require("fs");

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateRandomStrings(numStrings, stringLength) {
  const strings = [];

  for (let i = 0; i < numStrings; i++) {
    const randomString = generateRandomString(stringLength);
    strings.push(randomString);
  }

  return strings;
}

const numStrings = 173;
const stringLength = 173;
const randomStrings = generateRandomStrings(numStrings, stringLength);

const jsonData = JSON.stringify(randomStrings, null, 2);

fs.writeFile("random_strings.json", jsonData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Random strings have been written to random_strings.json");
});
