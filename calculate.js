function addChar(input, character) {
    if(input.value == null || input.value == "0")
    input.value = character
    else
    input.value += character
    }
    function cos(form) {
    form.show.value = Math.cos(form.show.value);
    }
    function sin(form) {
    form.show.value = Math.sin(form.show.value);
    }
    function tan(form) {
    form.show.value = Math.tan(form.show.value);
    }
    function sqrt(form) {
    form.show.value = Math.sqrt(form.show.value);
    }
    function ln(form) {
    form.show.value = Math.log(form.show.value);
    }
    function exp(form) {
    form.show.value = Math.exp(form.show.value);
    }
    function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
    }
    var val = 0.0;
    function percent(input) {
    val = input.value;
    input.value = input.value + "%";
    }
    function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length)
    else
    input.value = "-" + input.value
    }
    function calculate(form) {
    form.show.value = eval(form.show.value);
    }
    function square(form) {
    form.show.value = eval(form.show.value) * eval(form.show.value)
    }
    function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
    if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
    && ch != "(" && ch!= ")" && ch != "%") {
    alert("invalid entry!")
    return false
    }
    }
    }
    return true
    }