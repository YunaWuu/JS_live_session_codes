function getRndInteger(n) {
    return Math.floor(Math.random() * n);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function genPassword(length) {
    if(length < 6 || length > 10) {
        return "";
    }

    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "0123456789";
    const specialCharSet = "!@#$%^&*";
    const fullSet = lowerCaseSet + upperCaseSet + numberSet + specialCharSet;

    // With the input length, initialize an empty array to store each password char in one element
    const passwordArray = [];
    let char;

    // generate a random lower-case letter and add to the array
    char = lowerCaseSet.charAt(getRndInteger(lowerCaseSet.length));
    passwordArray.push(char);

    // generate a random upper-case letter and add to the array
    char = upperCaseSet.charAt(getRndInteger(upperCaseSet.length));
    passwordArray.push(char);

    // generate a random number and add to the array
    char = numberSet.charAt(getRndInteger(numberSet.length));
    passwordArray.push(char);

    // geneaate a random special characters and add to the array
    char = specialCharSet.charAt(getRndInteger(specialCharSet.length));
    passwordArray.push(char);

    // generate several random characters and add to the array
    for(let i = 5; i <= length; i++) {
        char = fullSet.charAt(getRndInteger(fullSet.length));
        passwordArray.push(char);
    }

    // shuffle the array element randomly
    const shuffledArray = shuffle(passwordArray);
    const password = shuffledArray.join("");
    return password;
}

function genPasswordClick() {
    let len = parseInt(document.getElementById("length").value);
    let password = genPassword(len);
    document.getElementById("password").innerHTML = password;
}

function copyPassword() {
    // get the text field
    var copyText = document.getElementById("password").textContent;
    // copy text inside the text field
    navigator.clipboard.writeText(copyText);
    // alert the copied text
    alert("Copied the password: " + copyText);
}