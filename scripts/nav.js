function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";

    // Resetting nav tab backgroundcolor/color values
    for (j = 0; j < 6; j++) {
        document.getElementsByTagName("svg")[j].style.backgroundColor = "var(--bg-primary)";
        document.getElementsByTagName("svg")[j].style.color = "var(--text-primary)";
    }

    // Make the nav tab active
    elmnt.firstElementChild.style.backgroundColor = "var(--bg-secondary)";
    elmnt.firstElementChild.style.color = "var(--text-secondary)";

    // Get the element with id="defaultOpen" and click on it

    switch (pageName) {
        case "stats":
            document.getElementById("default-Stats-PanelOpen").click(); 
            break;
        case "twitter-timelines":
            document.getElementById("default-TwTl-PanelOpen").click();
            break; 
        case "articles":
            document.getElementById("default-Articles-PanelOpen").click();
            break; 

    }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultNavOpen").click(); 
document.getElementById("default-Stats-PanelOpen").click(); 
