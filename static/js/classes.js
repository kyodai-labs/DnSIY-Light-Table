String.prototype.format = function(mapping) {
    return new Formatter(this).format(mapping);
};

String.prototype.console = function(clear) {
    var c = document.querySelector('#console');

    clear = clear || false;

    if (clear) c.value = '';

    if (c.value.length === 0) {
        c.value = this.toString();
    }
    else {
        c.value += '\n' + this.toString();
    }

    c.scrollTop = c.scrollHeight;
};

function Formatter(str) {
    this.str = str.toString();
    this.pattern = /\{(.*?)\}/g;
}

Formatter.prototype.mapper = function(mapping) {
    return function(_, name) {
        var v = Math.round(mapping[name] * 100).toString();
        return v === "0" ? "0.00" : v.slice(0, -2) + '.' + v.slice(-2);
    };
};

Formatter.prototype.format = function(m) {
    return this.str.replace(this.pattern, this.mapper(m));
};
