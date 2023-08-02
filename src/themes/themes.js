let themeElements = document.getElementsByClassName("theme");
let themes = [];

for (let i = 0; i < themeElements.length; i++) {
    themes.push(themeElements[i].id);
}

function applyTheme(enabledTheme) {
    for (let i = 0; i < themes.length; i++) {
        let theme = themes[i];
        if (theme == enabledTheme) {
            document.getElementById("favicon").href = document.getElementById(theme + "-favicon").src;
            disableTheme(theme, false);
        } else {
            disableTheme(theme, true);
        }
    }
}

function disableTheme(id, disable=true) {
    document.getElementById(id).disabled = disable;
}

let selectedTheme = localStorage.getItem("theme") || "minimal";
applyTheme(selectedTheme)
