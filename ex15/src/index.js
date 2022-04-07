function switchCase(letter){

    switch (letter){
        case "a":
            "antelope";
            break;
        case "b":
            "bird";
            break;
        case "c":
            "cat";
            break;
        default:
            "stuff";
            break;
    }

    return letter;
}

switchCase("c");

module.exports = switchCase;