let pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"; 


// let button = document.querySelector("button");
// let outputBox = document.getElementById("finalResult");

let n = document.getElementById("Data");
let small = "The number is too small";
let big = "The number is too large";


function Pi (n) {
    x = (n + 2);
    if (n > 0 && n <=100) {
        return pi.slice(0, x);
    } else if (n > 100) {
        document.getElementById("finalResult").innerHTML = big;
    } else {
        document.getElementById("finalResult").innerHTML = small;
    }
}


//button.onclick = function piResult();


// function piResult () {
//     return returnPi(n);
// }

// function returnPi(n) {     
//     if (n > 0) { 
//             return outputBox.innerHTML = pi.toPrecision(n); 
//                 //.toFixed will mean that the variable "pi" will be shown to N decimal places after 3.
//         } else if (n > 100) { 
//             return outputBox.innerHTML = "Your number is too large";
//         } else { 
//             return outputBox.innerHTML = "Your number is too small";
//         }
//     }

// function returnPi(n) {
//     if (n > 0) {
//         return pi.toFixed(n); 
//             //.toFixed will mean that the variable "pi" will be shown to N decimal places after 3.
//     } else if (n > 100) { 
//         return "Your number is too large";
//     } else { 
//         return "Your number is too small";
//     }
// }




// function calcPi(){
//     return document.getElementById("Calculate").addEventListener("click", function returnPi(){})
// }

// function returnPi(n) {
//     if (n > 0) {
//         return document.getElementById("finalResult").innerHTML = pi.toFixed(n); 
//         //.toFixed will mean that the variable "pi" will be shown to N decimal places after 3.
//     } else if (n > 100) { 
//         return document.getElementById("finalResult").innerHTML = "Your number is too large";
//     } else { 
//         return document.getElementById("finalResult").innerHTML = "Your number is too small";
//     }
// }