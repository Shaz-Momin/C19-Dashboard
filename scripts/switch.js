function switchThemes(elmnt) {

    if (elmnt.firstElementChild.style.backgroundColor == "var(--bg-secondary)") {
        // Toggling dark theme
        console.log("toggling dark theme...");

        document.documentElement.style.setProperty('--bg-primary', '#192229')
        document.documentElement.style.setProperty('--bg-secondary', '#8AB898')
        document.documentElement.style.setProperty('--text-secondary', 'white')

        document.documentElement.style.setProperty('--text-primary', '#8AB898')

        document.documentElement.style.setProperty('--tabContent-bg-primary', '#323D44')
        document.documentElement.style.setProperty('--panel-active', '60,73,81')
        document.documentElement.style.setProperty('--bg-content', '#3C4951')

        document.documentElement.style.setProperty('--panel-title','#79868F')
        document.documentElement.style.setProperty('--panel-subTitle','#8A979F')
        document.documentElement.style.setProperty('--news-widget','148, 161, 169')


        elmnt.firstElementChild.style.backgroundColor = "var(--bg-primary)";
        elmnt.firstElementChild.style.color = "var(--text-primary)";
    } else {
        // Toggling solarized dark theme
        console.log("toggling solarized dark theme...");

        document.documentElement.style.setProperty('--bg-primary', '#15282A')
        document.documentElement.style.setProperty('--bg-secondary', '#B8E8B5')
        document.documentElement.style.setProperty('--text-secondary', 'white')

        document.documentElement.style.setProperty('--text-primary', '#B8E8B5')

        document.documentElement.style.setProperty('--tabContent-bg-primary', '#194B43')
        document.documentElement.style.setProperty('--panel-active', '59, 127, 106')
        document.documentElement.style.setProperty('--bg-content', '#3B7F6A')

        document.documentElement.style.setProperty('--panel-title','#b5c1c9')
        document.documentElement.style.setProperty('--panel-subTitle','#B1BBC2')
        document.documentElement.style.setProperty('--news-widget','111, 179, 157')


        // changing twtl theme
        for (i = 0; i < document.getElementsByClassName('twitter-timeline').length; i++) {
            document.getElementsByClassName('twitter-timeline')[i].setAttribute('data-theme','light');
        }

        elmnt.firstElementChild.style.backgroundColor = "var(--bg-secondary)";
        elmnt.firstElementChild.style.color = "var(--text-secondary)";
    }



    
}