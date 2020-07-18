var county_list = [];

$.getJSON(postmanCounties, (data) => {
    for (i = 0; i < data.message.length; i++) {
        county_list.push(data.message[i].county_name);
        //console.log(data.message[i].county_name);
    }
    //console.log(county_list.length);

    for (var i = 0; i < county_list.length; i++) {
        if (county_list[i] != "Unassigned") {
            var text = document.createElement("option");
            text.value = "" + county_list[i] + "";
            text.innerHTML = county_list[i];
            document.getElementById("US-counties").appendChild(text); 
        }
    }
})

$('#US-counties').select2({
    width: "15rem"
});