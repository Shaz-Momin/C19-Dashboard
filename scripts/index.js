console.log("Hello coder");
var total = "";
var table = "";

var url = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";

$.getJSON(url,(dat) => {
    fetch(dat);
    //getTotal();
    //getTable();

    setWW();

    function setWW() {
        console.log("testing");
        var ww = getWW();
        document.getElementsByClassName("total cases")[0].innerHTML = "Cases: " + ww.TotalCases;
        document.getElementsByClassName("total deaths")[0].innerHTML = "Deaths: " + ww.TotalDeaths;
        document.getElementsByClassName("total recovered")[0].innerHTML = "Recovered: " + ww.TotalRecovered;
        document.getElementsByClassName("total active-cases")[0].innerHTML = "Active Cases: " + ww.ActiveCases;

    }
    
});





function fetch(data){
    total = data.reports[0];
    table = data.reports[0].table;
    //console.log(table);

}

function getWW() {
    console.log("getWW is called", total);
    return ("WorldWide: ", getTable()[0][0]);
}

function getTable() {
    return ("Table: ", table);

}
