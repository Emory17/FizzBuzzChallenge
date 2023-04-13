function getValues() {
    let fizzVal = document.getElementById("fizznum").value;
    let buzzVal = document.getElementById("buzznum").value;
    let stopVal = document.getElementById("stopnum").value;

    fizzNum = parseInt(fizzVal);
    buzzNum = parseInt(buzzVal);
    stopNum = parseInt(stopVal);

    if (
        !Number.isInteger(fizzNum) ||
        !Number.isInteger(buzzNum) ||
        !Number.isInteger(stopNum) ||
        fizzNum < 1 ||
        buzzNum < 1 ||
        stopNum < 1
    ) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter positive integers for all values",
            backdrop: false,
        });
        return;
    }

    if (stopNum > 5000) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter a Stop Value below 5000",
            backdrop: false,
        });
        return;
    }

    document.getElementById("fizznum").value = fizzNum;
    document.getElementById("buzznum").value = buzzNum;
    document.getElementById("stopnum").value = stopNum;

    let fbarr = [];
    fbarr = generateFizzBuzz(fbarr, 1, fizzNum, buzzNum, stopNum);
    displayFizzBuzz("<tr>", 0, fbarr);
}

function generateFizzBuzz(fbarr, index, fizzNum, buzzNum, stopNum) {
    if (index > stopNum) {
        return fbarr;
    }
    let val =
        index % fizzNum == 0
            ? index % buzzNum == 0
                ? "FizzBuzz"
                : "Fizz"
            : index % buzzNum == 0
                ? "Buzz"
                : "" + index;
    fbarr.push(val);
    return generateFizzBuzz(fbarr, index + 1, fizzNum, buzzNum, stopNum);
}

function displayFizzBuzz(out, index, fbarr) {
    if (index >= fbarr.length) {
        if (index % 5 != 0) {
            out += "<td class='table-light'></td>";
            displayFizzBuzz(out, index + 1, fbarr);
            return;
        }
        document.getElementById("results").innerHTML = out + "</tr>";
        return;
    }

    let val = fbarr[index];
    out +=
        val == "Fizz"
            ? "<td class='table-secondary'>Fizz</td>"
            : val == "Buzz"
            ? "<td class='table-dark'>Buzz</td>"
            : val == "FizzBuzz"
            ? "<td class='table-info'>FizzBuzz</td>"
            : "<td class='table-light'>" + val + "</td>";
    if (index % 5 == 4) {
        out += "</tr><tr>";
    }
    displayFizzBuzz(out, index + 1, fbarr);
}
