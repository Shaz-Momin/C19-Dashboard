var situationURL = "https://covid19-server.chrismichael.now.sh/api/v1/SituationReports";

function updateDoc() {
    $.getJSON(situationURL, (dat) => {
        var reports = dat.reports;
        //console.log(reports);

        var latestReport = reports[0];
        console.log(latestReport);
        
        document.getElementById("reportFrame").src = latestReport.pdf;
        
    })
}


updateDoc();

setInterval(function() {
    updateData();
}, 3600000)