let letters = "abcdefghijklmnopqrstuvwxyz"; //string  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let input = document.getElementById("input");
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let key = document.getElementById("key");
let output = document.getElementById("output");

function procesInput() {
  let text = input.value;
  let keyValue = key.valueAsNumber;
  if (encode.checked) {
    encodeText(text, keyValue);
  } else {
    decodeText(text, keyValue);
  }
}

function encodeText(inputText, inputKey) {
  let outputText = "";
  for (let i = 0; i < inputText.length; i = i + 1) {
    let inputCharacter = inputText[i];
    let index = letters.indexOf(inputCharacter);
    if (index !== -1) {
      let outputIndex = inputKey + index;
      if (outputIndex >= letters.length) {
        outputIndex = outputIndex - letters.length;
      }
      let outputinputCharacter = letters[outputIndex];
      outputText = outputText + outputinputCharacter;
    } else {
      outputText = outputText + inputCharacter;
    }
  }
  output.value = outputText;
}

function decodeText(inputText, inputKey) {
  let outputText = "";
  for (let i = 0; i < inputText.length; i = i + 1) {
    let inputCharacter = inputText[i];
    let index = letters.indexOf(inputCharacter);
    if (index !== -1) {
      let outputIndex = index - inputKey;
      if (outputIndex < 0) {
        outputIndex = outputIndex + letters.length;
      }
      let outputinputCharacter = letters[outputIndex];
      outputText = outputText + outputinputCharacter;
    } else {
      outputText = outputText + inputCharacter;
    }
  }
  output.value = outputText;
}
