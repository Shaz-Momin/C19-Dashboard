var total = "";
var tableWW = "";
var tableStates = "";

var urlWW = "https://covid19-server.chrismichael.now.sh/api/v1/AllReports";
var urlStates = "https://covid19-server.chrismichael.now.sh/api/v1/UnitedStateCasesByStates";
var postmanCounties = "https://covid19-us-api.herokuapp.com/county"; // API URL from POSTMAN

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

    $.getJSON(postmanCounties, (dat) => {
        //console.log(dat.message[0].county_name);

        $("#US-counties").change(function() {
            setCountyContent($("#US-counties").val());
        })

        function setCountyContent(val) {
            for ( i = 0; i < dat.message.length; i++) {
                if (dat.message[i].county_name == val) {
                    $(".co-state-name").html((dat.message[i].state_name.toString()));
                    $(".co-confirmed-cases").html((dat.message[i].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
                    $(".co-deaths").html((dat.message[i].death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
                    $(".co-new-cases").html((dat.message[i].new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
                    $(".co-new-deaths").html((dat.message[i].new_death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
                    $(".co-fatality-rate").html((dat.message[i].fatality_rate.toString()));
                }
            }
        }
    })
}


// Refreshes every 5000ms
setInterval(function(){
    updateData();
}, 5000);
