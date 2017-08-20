(function() {

var button = document.getElementById('do-calc');

button.onclick = function(e) {
    "".console(true);

    var form = this.form,
        inputs = form.querySelectorAll('input[name]'),
        vars = {};

    if (!form.reportValidity()) {
        return;
    }

    "Captured variables:".console();

    inputs.forEach(function(i) {
        vars[i.name] = parseFloat(i.value);
        (i.name + ' = ' + i.value).console();
    });

    scrChange();

    "\nCalculating...".console();

    vars.b = vars.l + 2 * (vars.s + vars.e);
    "b = l + 2 * (s + e) = {b}".format(vars).console();

    vars.y = Math.tan(vars['α'] * Math.PI / 180) * vars.c;
    "y = tg(α) * c = {y}".format(vars).console();

    vars.d = vars.a + vars.y
    "d = a + y = {d}".format(vars).console();

    vars.x = Math.sqrt(vars.c * vars.c + vars.y * vars.y);
    "x = √(c² + y²) = {x}".format(vars).console();

    vars.h = vars.b - 2 * vars.e;
    "h = b - 2e = {h}".format(vars).console();

    vars.i = vars.c - 2 * vars.e;
    "i = c - 2e = {i}".format(vars).console();

    vars.j = vars.b - 2 * (vars.e - vars.g);
    "j = b - 2(e-g) = {j}".format(vars).console();

    vars.k = vars.x + 2 * vars.g;
    "k = x + 2g = {k}".format(vars).console();
};

})();
