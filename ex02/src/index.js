function myFunction(myParameter){

    if(myParameter){

        return "The parameter is true!";
    }
    return "The parameter is false";
}

myFunction(true);
myFunction(myParameter);

module.exports = myFunction;