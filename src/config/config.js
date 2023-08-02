const selectors = document.getElementsByClassName("theme-selector");
for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", function(e) {
        let selected = e.target.value;
        localStorage.setItem("theme", selected);
        applyTheme(selected);
    });
}

document.querySelector("#input-" + localStorage.getItem("theme")).checked = true;
