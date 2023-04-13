function getValues(){
    let fizzVal= document.getElementById("fizznum").value;
    let buzzVal = document.getElementById("buzznum").value;
    let stopVal = document.getElementById("stopnum").value;

    fizzNum = parseInt(fizzVal);
    buzzNum = parseInt(buzzVal);
    stopNum = parseInt(stopVal);

    if(!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || !Number.isInteger(stopNum) || fizzNum < 1 || buzzNum < 1 || stopNum < 1){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter positive integers for all values.",
            backdrop: false
        });
        return;
    }

    if(stopNum > 5000){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter a Stop value below 5000",
            backdrop: false,
        });
        return;
    }

    document.getElementById("fizznum").value = fizzNum;
    document.getElementById("buzznum").value = buzzNum;
    document.getElementById("stopnum").value = stopNum;

    let fbarr = generateFizzBuzz(fizzNum, buzzNum, stopNum);
    displayFizzBuzz(fbarr);
}

function generateFizzBuzz(fizzNum, buzzNum, stopNum) {
    let fbarr = [];
    for (i = 0; i < stopNum; i++) {
        var unfizzed = true;
        var num = i+1;
        var val = "";
        if (num % fizzNum == 0) {
            val += "Fizz";
            unfizzed = false;
        }
        if (num % buzzNum == 0) {
            val += "Buzz";
            unfizzed = false;
        }
        if (unfizzed) {
            val += num;
        }
        fbarr.push(val);
    }

    return fbarr;
}

function displayFizzBuzz(fbarr){
    let table = document.getElementById("results");
    let out = "<tr>";
    
    for(i = 0; i < fbarr.length; i++){
        let val = fbarr[i]
        if(val == "Fizz"){
            out += "<td class='table-secondary'>Fizz</td>";
        }
        else if(val == "Buzz"){
            out += "<td class='table-dark'>Buzz</td>";
        }
        else if(val == "FizzBuzz"){
            out += "<td class='table-info'>FizzBuzz</td>";
        }
        else{
            out += "<td class='table-light'>" + val + "</td>";
        }

        if(i%5 == 4){
            out += "</tr><tr>"
        }
    }

    var tcount = fbarr.length;
    while(tcount%5 != 0){
        out += "<td class='table-light'></td>";
        tcount++;
    }

    out += "</tr>"

    table.innerHTML = out;
}