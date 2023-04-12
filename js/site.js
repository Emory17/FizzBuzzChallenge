function fizzBuzz() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let table = document.getElementById("results");

    if (startValue == "" || endValue == "") {
        table.innerHTML = "<tr><td>Error: Missing Value</td></tr>";
        return;
    }

    startNumber = parseInt(startValue);
    endNumber = parseInt(endValue);

    table.innerHTML = "";
    
    if (startNumber <= endNumber) {
        for (i = startNumber; i <= endNumber; i++) {
            table.innerHTML += "<tr><td>" + fizzCheck(i) + "</td></tr>";
        }
    } else {
        for (i = startNumber; i >= endNumber; i--) {
            table.innerHTML += "<tr><td>" + fizzCheck(i) + "</td></tr>";
        }
    }
}

function fizzCheck(num){
    var unfizzed = true;
    var out = "";
    if(num%3 == 0){
        out += "Fizz";
        unfizzed = false;
    }
    if(num%5 == 0){
        out += "Buzz";
        unfizzed = false;
    }
    if(unfizzed){
        out += num;
    }
    return out;
}
