exports.cToF = function (c) {
    f = c * 1.8 + 32;
    return ((f).toFixed(2));
}

exports.fToC = function (f) {
    c = (f - 32) / (18 / 10);
    return c.toFixed(2);
}
