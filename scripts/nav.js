function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";

    // Resetting nav tab backgroundcolor/color values
    document.getElementsByTagName("svg")[0].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[0].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[1].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[1].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[2].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[2].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[3].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[3].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[4].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[4].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[5].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[5].style.color = "var(--text-primary)";

    document.getElementsByTagName("svg")[6].style.backgroundColor = "var(--bg-primary)";
    document.getElementsByTagName("svg")[6].style.color = "var(--text-primary)";


    // Make the nav tab active
    elmnt.firstElementChild.style.backgroundColor = "var(--bg-secondary)";
    elmnt.firstElementChild.style.color = "var(--text-secondary)";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 