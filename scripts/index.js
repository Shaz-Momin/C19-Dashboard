var total = "";
var tableWW = "";
var tableStates = "";

var urlWW = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
var urlStates = "https://covid19-server.chrismichael.now.sh/api/v1/UnitedStateCasesByStates";
updateData();

function updateData() {
    
    $.getJSON(urlWW,(dat) => {
        fetch(dat);
    
        //console.log(getWW());
        setGlobalContent();

    
        function setGlobalContent() {
            $(".g-total-cases").html(getWW().TotalCases); 
            $(".g-total-deaths").html(getWW().TotalDeaths); 
            $(".g-total-recovered").html(getWW().TotalRecovered); 
            $(".g-new-cases").html(getWW().NewCases); 
            $(".g-new-deaths").html(getWW().NewDeaths); 
            $(".g-active-cases").html(getWW().ActiveCases); 
        }

        $("#countries").change(function() {
            setCountryContent($("#countries").val());
        })

        function setCountryContent(val) {
            for (var i = 0; i < tableWW[0].length; i++) {
                if (tableWW[0][i].Country == val) {
                    $(".c-total-cases").html(tableWW[0][i].TotalCases); 
                    $(".c-total-deaths").html(tableWW[0][i].TotalDeaths); 
                    $(".c-total-recovered").html(tableWW[0][i].TotalRecovered); 
                    $(".c-active-cases").html(tableWW[0][i].ActiveCases);
                    $(".c-total-tests").html(tableWW[0][i].TotalTests);
                    
                    if ($(".c-total-cases").text().length == 0) {
                        $(".c-total-cases").html("No Data");
                    }
                    if ($(".c-total-deaths").text().length == 0) {
                        $(".c-total-deaths").html("No Data");
                    }
                    if ($(".c-total-recovered").text().length == 0) {
                        $(".c-total-recovered").html("No Data");
                    }
                    if ($(".c-active-cases").text().length == 0) {
                        $(".c-active-cases").html("No Data");
                    }
                    if ($(".c-total-tests").text().length == 0) {
                        $(".c-total-tests").html("No Data");
                    }
                }
            }
        }

        
        function fetch(data){
            total = data.reports[0];
            tableWW = data.reports[0].table;
        }
    
        function getWW() {
            return (tableWW[0][0]);
        }
    });

    $.getJSON(urlStates, (dat) => {
        fetch(dat);
        
        //console.log(tableStates);

        $("#US-states").change(function() {
            setStateContent($("#US-states").val());
            
        })

        function setStateContent(val) {
            for (var i = 0; i < tableStates.length; i++) {
                if (tableStates[i].state == val) {
                    $(".s-total-test-results").html((tableStates[i].totalTestResults).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    $(".s-positive").html((tableStates[i].positive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    $(".s-negative").html((tableStates[i].negative).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    $(".s-total-deaths").html((tableStates[i].death).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    $(".s-data-quality-grade").html((tableStates[i].dataQualityGrade).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }
            }
        }
    
    
        function fetch(database) {
            tableStates = database.data[0].table;
        }
    
        
    });
}


// Refreshes every 5000ms
setInterval(function(){
    updateData();
}, 5000);
