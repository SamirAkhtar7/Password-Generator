let input = document.querySelector("#input");
let sumit = document.querySelector("#submit");
let new_pass = document.querySelector("#new");

function gp() {
  let password = " ";
  for (let i = 0; i < 9; i++) {
    let number = Math.floor(Math.random() * (127 - 32) + 32);
    let char = String.fromCharCode(number);
    password += char;
  }
  input.value = password;
}

sumit.addEventListener("click", function (e) {
  e.preventDefault();
  gp();
});
