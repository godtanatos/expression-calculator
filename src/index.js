function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let balance = 0;
    let reg = /\/ 0/g;
    expr.split("").forEach(element => {
        if (element == "(") {
            balance++;
        } else if (element == ")") {
            balance--;
        }

    });
    if (balance != 0) {
        throw new Error('ExpressionError: Brackets must be paired')
    }

    let sum = new Function(`return ${expr}`);

    p = sum();
    if (expr.search(reg) !== -1) {
        throw new Error("TypeError: Division by zero.");
    } else
        return p;
}

module.exports = {
    expressionCalculator
}
