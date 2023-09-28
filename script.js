document.addEventListener("DOMContentLoaded", () => {
    const getCatButton = document.getElementById("getCatButton");
    const catImage = document.getElementById("catImage");

    getCatButton.addEventListener("click", () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                const catImageUrl = data[0].url;
                catImage.src = catImageUrl;
            })
            .catch(error => {
                console.error("Hubo un error al obtener la imagen del gato:", error);
            });
    });
});
