let sourceUrl = "https://newsapi.org/v2/top-headlines?sources=";
let src = "";
let apiKey = "&language=en&apiKey=c3ebca5046794ae2b2087639cde8fea0";
var date = new Date();

let srcList = ["cnn", "cbs-news","cnbc","business-insider","bbc-news"];

//localStorage.clear();
let data = [{}];

if (window.localStorage.length != 1) {
    console.log("Adding news data");
    getNews();
} else {
    console.log(JSON.parse(window.localStorage.getItem("Data")));
}

if (date.getHours() == 23 && date.getMinutes() == 59 && date.getSeconds() == 59) {
    console.log("Updating news");
    updateNews();
}

function getNews() {
    for (var i = 0; i < srcList.length; i++) {
        $.getJSON(sourceUrl + srcList[i] + apiKey, (dat) => {
            data.push({dat});
            //localStorage.setItem(srcList[i], JSON.stringify(dat));
            //console.log(dat);
            window.localStorage.setItem("Data", JSON.stringify(data));
        })
    }
}

function updateNews() {
    window.localStorage.clear();
    getNews();
}


//localStorage.setItem("Data", data);


/* localStorage.setItem("Obj", JSON.stringify({
    "card": "Ace of Spades",
    "number": 1,
    "gameMode": true
})) */
