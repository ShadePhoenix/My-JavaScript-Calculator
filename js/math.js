//Need methods for each function
export function add(input1, input2) {
    return input1 + input2;
}
export function subtract(input1, input2) {
    return input1 - input2;
}
export function multiply(input1, input2) {
    return input1 * input2;
}
export function divide(input1, input2) {
    return input1 / input2;
}
export function posNeg(input) {
    return input < 0 ? Math.abs(input) : -Math.abs(input);
}

export const symbols = [
    "+".charCodeAt(0),
    "-".charCodeAt(0),
    "×".charCodeAt(0),
    "÷".charCodeAt(0)
];

export class Calculation {
    constructor(calcStr = "") {
        if (!calcStr.length) throw new Error("No gonna work");
        this.operator = calcStr.charAt(calcStr.indexOf(mathf.symbols));
        const [left, right] = calcStr.split(operator);
        this._left = left;
        this._right = right;
    }
}

export function equals(calculation) {
    switch (calculation.operator) {
        case symbols[0]:
            add(calculation.left, calculation.right);
            break;
        case symbols[1]:
            subtract(calculation.left, calculation.right);
            break;
        case symbols[2]:
            multiply(calculation.left, calculation.right);
            break;
        case symbols[3]:
            divide(calculation.left, calculation.right);
            break;
    }
}
