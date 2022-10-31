"Use strict";   // forces you to declare variables

function checkState() {
    const states = ["QLD", "NSW", "ACT", "VIC", "TAS", "NT", "SA", "WA"];
    let state = document.getElementById("someText").value;
    let found = false;    // flag

    state = state.toUpperCase();

    // linear search - you know that there is only one match
    for(let i = 0, len = states.length; i < len; i++) {
        if(state === states[i])    // == same; === same value and same data type
        {
            found = true;
            document.getElementById("ans").innerHTML = "You have entered a valid state.";
            break;   // only one match, so break out
        }
    }

    if (found == false)
    document.getElementById("ans").innerHTML = "You have not entered a valid state.";

}