let pi = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899"; 
let small = "The number is too small";
let big = "The number is too large";

/*This function gets the inpute value from the "Data" ID and then uses that value to determine if the number is within the boundaries 0 - 80 to output one of three options.

Creating variable 'x' lets me account for always requiring the '3.' from the string. */

function Pi () { 
    let n = document.getElementById("Data").value;
    n = parseInt(n);
    let x = (n + 2);
    if (n > 0 && n <=80) {
        document.getElementById("finalResult").innerHTML = pi.slice(0, x);
    } else if (n > 80) {
        document.getElementById("finalResult").innerHTML = big;
    } else {
        document.getElementById("finalResult").innerHTML = small;
    }
}

function reset1 () {
    location.reload(true);
}
/* 
At first for the reset function I tried to rewrite the HTML P element to an empty string (which did not work).

After research I tried to remove the child element using 'parentNode' and 'parentChild' which worked, but produced another problem that I could not then do more than one calculation.

Further research into refreshing the web page ultimately gave me the desired result.
*/