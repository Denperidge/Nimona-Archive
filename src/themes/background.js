const animateButton = document.getElementById("animate");

function animate(e) {
    const background = document.getElementById("background");
    if (background.paused) {
        background.play();
        animateButton.innerHTML = "Disable animations";
    } else {
        animateButton.innerHTML = "Enable animations";
        background.pause()
    }
    

}

animateButton.addEventListener("click", animate);
animate();
