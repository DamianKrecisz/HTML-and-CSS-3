let hamburger = document.querySelector("#toggle");
let logo = document.querySelector("#logo");
let toogled = false;

hamburger.addEventListener('click', () => {
    if (toogled == false) {
        logo.style.display = "none";
        toogled = true;
    } else {
        toogled = false;
        logo.style.display = "flex";

    }
})