const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
    const starClassActive = "rating__star fas fa-heart";
    const starClassUnactive = "rating__star far fa-heart";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className.indexOf(starClassUnactive) !== -1) {
                printRatingResult(result, i + 1);
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                printRatingResult(result, i);
                for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
            }

        };
    });
}

function printRatingResult(result, num = 0) {
    result.textContent = ``;
}

executeRating(ratingStars, ratingResult);



//here

function addRates(value) { //despues de limpiar, pongo los active nuevos
    for (var i = 1; i <= value; i++) {
        document.getElementById("star" + i).classList.add("active");

    }
}


function rate(value) {
    alert('Hola alert!' + value);
    addRates(value);



}