//Ignore the Memory buttons for now

const buttons = document.querySelectorAll(
    ".calculator .calculator__key-pad button"
);
buttons.forEach((btn) => btn.addEventListener("click", () => buttonEvent(btn)));

class Display {
    constructor() {
        this.element = document.getElementById("calcDisplay");
        this.prevElement = document.getElementById("calcDisplay__prev");
        this._displayStr = "";
        this._displayOff = this.element.classList.toggle(
            "calculator__display--hide",
            true
        );
        this.strMax = 24;
    }

    updateDisplay() {
        this.element.innerText = this.displayStr;
    }

    get displayStr() {
        return this._displayStr;
    }

    // set displayStr(value) {
    //     this._displayStr = value;
    //     this.updateDisplay();
    // }

    addToStr(numSym) {
        //add an if statement or else if to handle pressing a function button after calculating something. i.e
        //the user just submitted 2+2 so if they press a function button instead of another number, it should
        //display the answer, in this case 4, then the function button they pressed.
        if (this._displayStr === "" && !/[0-9]/.test(numSym))
            this._displayStr += "0";
        if (
            !/[0-9]/.test(this._displayStr[this._displayStr.length - 1]) &&
            !/[0-9]/.test(numSym)
        )
            this._displayStr = this._displayStr.slice(0, -1);
        this._displayStr += numSym;
        this.updateDisplay();
    }

    clearStr() {
        this._displayStr = "";
        this.updateDisplay();
        this.element.innerText = "0";
    }

    get displayOff() {
        return this._displayOff;
    }

    toggle() {
        this._displayOff = this.element.classList.toggle(
            "calculator__display--hide"
        );
        if (this.displayOff) this.clearStr();
    }
}

const display = new Display();

function buttonEvent(btn) {
    if (display.displayOff == true && btn.id != "onOff") return;
    if (btn.value === "function") {
        switch (btn.id) {
            case "onOff":
                display.toggle();
                break;
            case "negPos":
                break;
            case "sqrRoot":
                break;
            case "memClr":
                break;
            case "memAdd":
                break;
            case "memRemove":
                break;
            case "percentage":
                break;
            case "multiply":
                break;
            case "divide":
                break;
            case "plus":
                break;
            case "minus":
                break;
            case "equals":
                break;
        }
    }
    if (btn.value === "displayable") {
        display.addToStr(btn.innerText);
    }
    console.log(btn.innerText);
}
