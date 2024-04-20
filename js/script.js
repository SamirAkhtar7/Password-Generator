let password = " ";

let input = document.querySelector("#input");
let sumit = document.querySelector("#submit");
sumit.addEventListener('click', function (e) {
     e.preventDefault();
    for (let i = 0; i < 9; i++) {
        let number = Math.floor(Math.random() * (127 - 32) + 32);
        let char = String.fromCharCode(number);
        password += char;
    }

    if (input.value === "") {
        input.value += `${password}`;
    }
 
}
 )
