function randomRangeNumber(minNumber, maxNumber){

    if (minNumber > maxNumber){

        maxTemp = maxNumber;
        maxNumber = minNumber;
        minNumber = maxTemp;
    }

     
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
}

randomRangeNumber(12, 20);
randomRangeNumber(50, 30);

module.exports = randomRangeNumber;