String.prototype.format = function() {
    return new Formatter(this).format();
}

function Formatter(str) {
    this.str = str;
}
