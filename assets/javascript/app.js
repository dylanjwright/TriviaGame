// ----- Timer ----- //
var number = 30;

var intervalID;

function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement() {

    number--;
    
    $(".timeleft").html(number);

    if (number === 0) {

        stop();

        alert("times up");
    }
}

console.log(decrement)