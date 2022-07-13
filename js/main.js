import * as mathf from "./math.js";
//Ignore the Memory buttons for now

const buttons = document.querySelectorAll(
    ".calculator .calculator__key-pad button"
);
buttons.forEach((btn) => btn.addEventListener("click", () => buttonEvent(btn)));

class Display {
    constructor() {
        this.main = document.getElementById("calcDisplay");
        this.eDisplay = document.getElementById("calcDisplay__equation");
    }

    addToDisplay(char) {
        this.main.innerText === "0"
            ? (this.main.innerText = char)
            : (this.main.innerText += char);
    }

    displayResult(result) {
        this.displayEquation(this.main.innerText);
        this.main.innerText = result;
    }

    displayEquation(equation) {
        this.eDisplay.innerHTML = equation + "=";
    }

    clear() {
        this.main.innerText = "";
        this.eDisplay.innerText = "";
    }
}

const display = new Display();

const calcTmp = { left: "", operator: null, right: "" };
let calculation = { left: "", operator: null, right: "" };

function buttonEvent(btn) {
    if (btn.value === "function") {
        switch (btn.id) {
            case "clear":
                display.clear();
                calculation = calcTmp;
                break;
            case "negPos":
                calculation.operator == null
                    ? (calculation.left = mathf.posNeg(left))
                    : (calculation.right = mathf.posNeg(right));
                break;
            case "sqrRoot":
                break;
            case "percentage":
                break;
            case "equals":
                display.displayResult(mathf.equals(calculation));
                break;
        }
    }
    if (btn.value === "displayable") {
        if (!mathf.numRegex.test(btn.innerText)) {
            if (calculation.left == "") calculation.left = 0;
            calculation.operator = btn.innerText;
        } else if (calculation.operator == null) {
            calculation.left += btn.innerText;
        } else calculation.right += btn.innerText;
        display.addToDisplay(btn.innerText);
        console.log(calculation);
    }
}
