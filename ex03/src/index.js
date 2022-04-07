function myEqualFunction(num){

    if (num === 23){

        return "Equal";
    }
    return "Not equal";
}

myEqualFunction(35);
myEqualFunction();

module.exports = myEqualFunction;