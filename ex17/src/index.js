function inverseWhile(){

    var fiveNumbers = "";
    var stringNumber = 5;
    while (stringNumber >= 0){

        if (stringNumber == 0){

            fiveNumbers += stringNumber;
        }
        
        fiveNumbers += stringNumber + ",";
        stringNumber--;
    }
    return fiveNumbers;
}

inverseWhile();

module.exports = inverseWHile;