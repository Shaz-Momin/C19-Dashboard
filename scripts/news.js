let sourceUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
let query = "&q=coronavirus";
let sort = "&sort=newest";
let apiKey = "&api-key=tsAmKyrp4kA9AAQPgzDt3K5y0zHSi7nM";
let rootImgSrc = "https://www.nytimes.com/";
var date = new Date();



$.getJSON("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&sort=newest&type_of_material=news&api-key=tsAmKyrp4kA9AAQPgzDt3K5y0zHSi7nM", (data) => {
    //console.log(data);
}) 

updateTopLatest();

// Refreshes every 30 seconds
setInterval(() => {
    updateTopLatest();
}, 120000);


function updateTopLatest() {
    var node= document.getElementById("latest-top");
    node.querySelectorAll('*').forEach(n => n.remove());


    $.getJSON(sourceUrl + query + sort + apiKey, (dat) => {
        setArticles();

        function setArticles() {
            //var LatestTop = JSON.parse(window.localStorage.getItem("Latest-Top"));
            //console.log(LatestTop);
            var LatestArr = dat.response.docs;
            for (var i = 0; i < LatestArr.length; i++) {
                var elm = document.getElementsByClassName("gridContainer")[0];
                var newElm = elm.cloneNode(true);
                
                newElm.style.setProperty("display","grid");
                // Setting new attributes to article widget
                if (LatestArr[i].multimedia.length != 0) {
                    newElm.getElementsByTagName("img")[0].src = rootImgSrc + LatestArr[i].multimedia[10].url;
                    newElm.setAttribute("class", "gridContainer imgInc");
                } else {
                    newElm.getElementsByTagName("img")[0].style.display = "none";
                    newElm.style.height = "10rem"
                }

                newElm.getElementsByTagName("a")[0].innerHTML = LatestArr[i].headline.main;
                newElm.getElementsByTagName("a")[0].href = LatestArr[i].web_url;
                newElm.getElementsByClassName("des")[0].innerHTML = LatestArr[i].snippet;
                newElm.getElementsByClassName("datePublished")[0].innerHTML = formatPubAt(LatestArr[i].pub_date);

                // Adding the new widget {node}
                document.getElementById("latest-top").appendChild(newElm);
            }
        }

        function formatPubAt(str) {
            var strArr = str.split("T");
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            
            var month = months[parseInt(strArr[0].substring(5,7)) - 1];
            var numDate = strArr[0].substring(8);
        
            var hr = strArr[1].substring(0,2);
            var min = strArr[1].substring(3,5);
        
            var timeState = "";
            if (parseInt(hr) > 12) {
                hr = hr - 12;
                timeState = " P.M.";
            } else if (parseInt(hr) == 12) {
                timeState = " P.M.";
            } else {
                timeState = " A.M.";
            }
            //console.log(month + " " + numDate + " | " + hr + ":" + min + timeState);
            return (month + " " + numDate + " | " + hr + ":" + min + timeState);
        }
        

    })
}








//localStorage.setItem("Data", data);


/* localStorage.setItem("Obj", JSON.stringify({
    "card": "Ace of Spades",
    "number": 1,
    "gameMode": true
})) */

  
    /* var x = new XMLHttpRequest();
    x.open('GET', 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=797d8857b43b40938df73b9155aa59a2');
    // I put "XMLHttpRequest" here, but you can use anything you want.
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest', 'Origin');
    x.onload = function() {
        alert(x.responseText);
    };
    x.send(); */
    /* $.ajax({
        url: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&callback=?&apiKey=797d8857b43b40938df73b9155aa59a2', 
        type: 'GET',
        headers: {'Access-Control-Allow-Origin':'*','Origin':'X-Requested-With'},
        dataType: 'json', 
        success: function(data){
            data.push({"dat": data});
            console.log(data);
        } 
    });*/
    /* fetch("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c3ebca5046794ae2b2087639cde8fea0", {
        headers: {
            'Content-Type': 'application/json',
            'Origin':'X-requested-with'
        }
    }).then((response) => {
        return response.text();
    }).then((art) => {
        console.log(art);
    }) */
    //getNews();