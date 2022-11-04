const equalButton = document.getElementById("b_=");
const pantalla = document.getElementById("resultado");
const numberButton = document.getElementsByClassName("numero");
const operationButton = document.getElementsByClassName("operacion");
const eraseButton = document.getElementById("b_C");
let isEqualPressed = false;


for(let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", (event) => {
        if(isEqualPressed){
            pantalla.textContent = "" + numberButton[i].textContent;
            isEqualPressed = false;
        }else{
            pantalla.textContent += numberButton[i].textContent;
        }
    });
}

for(let i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener("click", (event) => {
        if(isEqualPressed) {
            pantalla.textContent = "";
            isEqualPressed = false;
        }else {
            pantalla.textContent += operationButton[i].textContent;
        }
    });
}

equalButton.addEventListener("click", (event) => {
    isEqualPressed = true;
    let answer = eval(pantalla.textContent);
    pantalla.textContent += "=" + answer;
});

eraseButton.addEventListener("click", (event) => {
    pantalla.textContent = "";
    isEqualPressed = false;
});


