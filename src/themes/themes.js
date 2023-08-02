let themeElements = document.getElementsByClassName("theme");
let themes = [];

for (let i = 0; i < themeElements.length; i++) {
    themes.push(themeElements[i].id);
}

function applyTheme(enabledTheme) {
    for (let i = 0; i < themes.length; i++) {
        let theme = themes[i];
        if (theme == enabledTheme) {
            disableTheme(theme, false);
        } else {
            disableTheme(theme, true);
        }
    }
}

function disableTheme(id, disable=true) {
    document.getElementById("favicon").href = document.getElementById(selectedTheme + "-favicon").src;
    document.getElementById(id).disabled = disable;
}

let selectedTheme = localStorage.getItem("theme") || "minimal";
applyTheme(selectedTheme)

const selectors = document.getElementsByClassName("theme-selector");
for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", function(e) {
        selectedTheme = e.target.value;
        localStorage.setItem("theme", selectedTheme);
        applyTheme(selectedTheme);
    });
}
