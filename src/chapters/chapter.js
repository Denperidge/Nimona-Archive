
const shows = ["comments", "dates"];
for (let i = 0; i < shows.length; i++) {
    let showId = shows[i];

    let shouldShow = localStorage.getItem(showId) || true;
    if (shouldShow == "false") {
        document.head.innerHTML += "<style>." + showId + " {display: none;}</style>"
    }
}
if (showComments == "false") {
console.log("dontshow")

}
console.log("meow")
