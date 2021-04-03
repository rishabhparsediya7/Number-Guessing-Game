var anynumber, count;
window.onload = () => {
    anynumber = Math.floor((Math.random() * 10) + 1);
    console.log(anynumber);
    count = 3;
};

function displayChances(chances) {
    document.getElementById("chance").innerHTML = "You have chance left: " + (chances);
    document.getElementById("chance").style.display = "block";
}

function addData() {
    var num = document.getElementById('num').value;
    console.log(num);
    if (num === "")
        alert("Please guess the number first !!!");
    else {
        if (count > 1) {
            if (num == anynumber) {
                console.log("correct");
                document.getElementById('moves').innerHTML = "You got that, You win !!";
                document.getElementById('moves').style.display = "block";
                setTimeout(() => { location.reload(); }, 2000);

            } else if (num > anynumber) {
                displayChances(count - 1);
                document.getElementById('moves').innerHTML = "Guess lower number !!";
                document.getElementById('moves').style.display = "block";
                console.log("Go lower");
            } else {
                displayChances(count - 1);
                document.getElementById('moves').innerHTML = "Guess Higher number !!";
                document.getElementById('moves').style.display = "block";
                console.log("go higher");
            }
        } else {
            displayChances(count - 1);
            document.getElementById('moves').innerHTML = "Oops you didnt win!!, Try again !!";
            document.getElementById('moves').style.display = "block";
            setTimeout(() => { location.reload(); }, 2000);
        }
        count--;

    }
}