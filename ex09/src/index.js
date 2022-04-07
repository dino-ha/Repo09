function logicalOrOperator(num){

    if (num <= 20 || num >= 30){

        return "Out";
    }
    return "In";
}

logicalOrOperator(15);

module.exports = logicalOrOperator;