console.log("hello");

function setDate() {
    var d = Date(Date.now());
    a = d.toString();

    //console.log(a);

    var date = new Date();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("date")[i].innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
    }

    //console.log(days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear());
}

setDate();

// Refreshes every 1000ms 
setInterval(function(){
    setDate();
}, 1000);