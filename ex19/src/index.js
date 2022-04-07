function myDoWhile(){

    var myNumbers = "";
    num = 0;
    do {

        if (num == 9){

            myNumbers += num;
        }
        myNumbers += num + ",";
        num++
    } while (num < 10)

}

myDoWhile();

module.exports = myDoWhile;