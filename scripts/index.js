console.log("Hello coder");
var total = "";
var table = "";

var url = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
updateData();

function updateData() {
    $.getJSON(url,(dat) => {
        fetch(dat);
    
        console.log(getWW());
        setGlobalContent();
    
        function setGlobalContent() {
            $(".g-total-cases").html(getWW().TotalCases); 
            $(".g-total-deaths").html(getWW().TotalDeaths); 
            $(".g-total-recovered").html(getWW().TotalRecovered); 
            $(".g-new-cases").html(getWW().NewCases); 
            $(".g-new-deaths").html(getWW().NewDeaths); 
            $(".g-active-cases").html(getWW().ActiveCases); 
        }
        
        function fetch(data){
            total = data.reports[0];
            table = data.reports[0].table;
        }
    
        function getWW() {
            return ("WorldWide: ", table[0][0]);
        }
    });
}

// Refreshes every 5000ms
setInterval(function(){
    updateData();
}, 5000);
