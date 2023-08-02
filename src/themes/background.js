const animateButton = document.getElementById("animate");

function animate(e) {
    const background = document.getElementById("background");
    if (background.paused) {
        animateButton.innerHTML = "Enable animations";
        background.play();

    } else {
        animateButton.innerHTML = "Disable animations";
        background.pause()
    }
    

}

animateButton.addEventListener("click", animate);
animate();
