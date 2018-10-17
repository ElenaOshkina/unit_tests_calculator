const add = function(x, y) {
    return Number(x) + Number(y);
}
const subtract = function(x, y) {
    return Number(x) - Number(y);
}
const multiply = function(x, y) {
    return Number(x) * (y);
}

const divide = function(x, y) {
    if(Number(y) === 0) return "Нельзя делить на ноль"; 
    return Number(x) / Number(y);
}

const pow = function(x,y) { 
    result = 1;
    for (i = 1; i <= y; i++) {
        result = result * x;
    }
    return result;
};
const checkInput = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
      return false;
    }
    return true;
  }

const sqrt = function(x) {
    if(x<0) return "Нельзя взять корень из отрицательного числа";
    squareRoot = x / 2.0;     
    do {
        t = squareRoot;
        squareRoot = (t + (x / t)) / 2.0;
    } while ((t - squareRoot) != 0);     
    return squareRoot;
}

module.exports = {
    multiply,
    add,
    subtract,
    divide,
    checkInput,
    pow,
    sqrt,
  }