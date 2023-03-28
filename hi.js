function getInputValue() {
    let inputValue1 = document.getElementsByClassName("inputField1")[0].value;
    if (inputValue1 == "admin") {
        var one = 1;
    } else {
        document.getElementById("output").innerHTML = "Wrong Username. Try Again.";
        var one = 0;
    }
    
    let inputValue2 = document.getElementsByClassName("inputField2")[0].value;
    if (inputValue2 == "1234") {
        if (one == 1) {
            window.location.href = "lol.html";
        }
    } else {
        document.getElementById("output2").innerHTML = "Wrong Password. Try Again";




    }
}

