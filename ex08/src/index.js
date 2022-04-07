function logicalAndOperator(num){

    if (num <= 80 && num >= 40){

        return "Yes";
    }
    return "No";
}

logicalAndOperator(50);

module.exports = logicalAndOperator;