const names = [];

function addName() {
  const nameInput = document.getElementById("name-input").value;
  names.push(nameInput);
  document.getElementById("name-input").value = "";
}

function guessName() {
  const result = document.getElementById("result");

  if (names.length === 0) {
    result.innerText = "Please enter some names first.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  result.innerText = `Our pick is: ${randomName}!`;

  // clear names 
  names.length = 0;
}
