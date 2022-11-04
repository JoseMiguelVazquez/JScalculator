const bSeven = document.getElementById("b_7");
const bEight = document.getElementById("b_8");
const bSum = document.getElementById("b_+");
const bEqual = document.getElementById("b_=");
const pantalla = document.getElementById("resultado");

const numbers = [];
let operation;


bEqual.addEventListener("click", (event) => {
    let answer = eval(pantalla.textContent);
    pantalla.textContent += "= " + answer;
    // pantalla.textContent += 
});

bSeven.addEventListener("click", (event) => {
     numbers.push(7);
    console.log(numbers);
     pantalla.textContent += 7;
});

bEight.addEventListener("click", (event) => {
     num2 = 8;
     console.log("Click 8!");
     pantalla.textContent += 8;
});

bSum.addEventListener("click", (event) => {
    operation = "Sum";
    pantalla.textContent += "+";
});

bEqual.addEventListener("click", (event) => {
     pantalla.textContent += "=";
     if(operation == "Sum"){
     pantalla.textContent += sum(num1, num2);
     }  
});

function sum (x, y) {
    return x + y;
}


