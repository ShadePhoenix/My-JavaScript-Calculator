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

export const numRegex = /[0-9.]/;

export const symbols = [
    "+".charCodeAt(0),
    "-".charCodeAt(0),
    "×".charCodeAt(0),
    "÷".charCodeAt(0)
];

export const equals = (obj) => {
    const left = Number(obj.left);
    const right = Number(obj.right);
    if (obj.operator == null) return obj.left;
    switch (obj.operator.charCodeAt(0)) {
        case symbols[0]:
            return add(left, right);
        case symbols[1]:
            return subtract(left, right);
        case symbols[2]:
            return multiply(left, right);
        case symbols[3]:
            return divide(left, right);
    }
};
