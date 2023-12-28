

let counter = 0;
function button() {
    var value = document.getElementById("yesorno");
    if (counter % 2 == 0) {
        value.innerHTML = "NO";
    } else {
    value.innerHTML = "YES";
    }
    counter++
    
}

function todayDate() {
    var now = new Date();
    var currentDateTime = now.toLocaleString();
    var value = document.getElementById("dateupdater");
    value.innerHTML = "As of " + currentDateTime;
}

var button = ""
var sleeptime = ""
function loading() {
    var loader = document.getElementById("yesorno");
    button = document.getElementById("button")
    button.innerHTML = "LOADING...";
    loader.innerHTML = "";
    loader.classList.add('loader');
    sleeptime = Math.random()*2000;
    sleep(sleeptime).then(() => { getAnswer(); });
}

function getAnswer() {
    var loader = document.getElementById("yesorno");
    loader.classList.remove('loader');
    var randomint = Math.round(Math.random()*3)
    var text = ""
    if (randomint == 0) {
        text = "YES";
    } else if (randomint == 1) {
        text = "NOT SURE, TRY REFRESHING AGAIN";
    } else if (randomint == 2) {
        text = "I THINK SO";
    } else if (randomint == 3) {
        text = "SHE MIGHT BE WITH JAKE GYLLENHAAL..."
    }
    loader.innerHTML = "YES";
    button.innerHTML = "REFRESH";
    todayDate();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

