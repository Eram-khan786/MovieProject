let input = document.querySelector(".input");
let btn = document.querySelector(".SearchBtn");
let languages = document.querySelector(".languages");
let descriptionAns = document.querySelector(".descriptionAns");
let harry = document.querySelector(".harry");
let rightSection = document.querySelector(".right");

btn.addEventListener("click", () => {
    fetch(`https://omdbapi.com/?t=${input.value}&apikey=b5413271`)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            if (data.Response === "True") {
                descriptionAns.innerHTML = data.Plot;
                languages.innerHTML = data.Language;
                harry.src = data.Poster;
                rightSection.classList.remove("hidden");
            } else {
                alert("Movie not found!");
                rightSection.classList.add("hidden");
            }
        })
        .catch((error) => {
            console.error("Error fetching the movie data:", error);
            rightSection.classList.add("hidden");
        });
});
