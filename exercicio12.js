function foo() {

    var numero = 1;
    while (numero <= 10) {
        document.write(numero + " ");
        numero++;
    }
};

function foo1() {

    var arr = new Array("1.5", "5", "7", "9", "10");
    var s = "";
    var media = 0;
    for (var key in arr) {
        n = n + arr[key]
        s += key + ": " + arr[key];
        s += "\n";
    }
    alert(s);

};