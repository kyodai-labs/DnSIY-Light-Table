(function() {

var button = document.getElementById('do-calc');

button.onclick = function(e) {
    var form = this.form,
        inputs = form.querySelectorAll('input[name]'),
        variables = {};

    if (!form.reportValidity()) {
        return;
    }

    inputs.forEach(function(i) {
        variables[i.name] = i.value;
    });

    console.log(variables);
    scrChange();
};

})();
