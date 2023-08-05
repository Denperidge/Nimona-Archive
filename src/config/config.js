const selectors = document.getElementsByClassName("theme-selector");
for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", function(e) {
        let selected = e.target.value;
        localStorage.setItem("theme", selected);
        applyTheme(selected);
    });
}

let currentTheme = localStorage.getItem("theme") || "minimal";
document.querySelector("#input-" + currentTheme).checked = true;

const shows = document.getElementsByClassName("show");
for (let i = 0; i < shows.length; i++) {
    let show = shows[i];
    if (localStorage.getItem(show.id) == "false") {
        show.checked = false;
    } else {
        show.checked = true;
    }


    show.addEventListener("input", function(e) {

        localStorage.setItem(e.target.id, e.target.checked)
    });
}

