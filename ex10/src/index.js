function mathTest(x, y){

    if (x < 0 || y < 0){

        return;
    }

    return Math.round(Math.pow(Math.sqrt(x)+Math.sqrt(y), 2));
}

mathTest(-2, 3);
mathTest(15, 20);

module.exports = mathTest;