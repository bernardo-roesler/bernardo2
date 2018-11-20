function foo() {

    var arr = {<img src="\Imagens\cat1.jpg">, <img src="\Imagens\cat2.jpg">, <img src="\Imagens\cat3.jpg">,
               <img src="\Imagens\cat4.jpg">, <img src="Imagens\cat5.jpg">};
    var s = "";

    for (var key in arr) {
        n = n + arr[key]
        s += key + ": " + arr[key];
        s += "\n";
    }
    alert(s);
