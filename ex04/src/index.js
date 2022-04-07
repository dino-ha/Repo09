function compareDifferentValues(m, n){

    if (m === n){

        return "Equal";
    }
    return "Not equal";
}

compareDifferentValues(1, "1");
compareDifferentValues(1, 1);
compareDifferentValues(m, n);

module.exports = compareDifferentValues;