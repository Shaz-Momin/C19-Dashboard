function openPanel(pageName, elmnt) {
    // Hide all elements with class="panelcontent" by default
    var i, panelcontent;
    panelcontent = document.getElementsByClassName("panelContent");
    for (i = 0; i < panelcontent.length; i++) {
        panelcontent[i].style.display = "none";
    }
    
    // Show the specific panel content
    document.getElementById(pageName).style.display = "flex";

    // Resetting nav tab backgroundcolor/color values
    var panels = document.getElementsByClassName("panel");
    for (j = 0; j < panels.length; j++) {
        document.getElementsByClassName("panel")[j].style.backgroundColor = "var(--tabContent-bg-primary)";
    }

    // Make the section panel active
    elmnt.style.backgroundColor = "rgb(var(--panel-active))";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default-Stats-PanelOpen").click(); 
