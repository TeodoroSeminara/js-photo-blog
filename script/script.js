// dichiarazione tag html e API
const cardContainer = document.querySelector(".container-card");
const imgApi = "https://lanciweb.github.io/demo/api/pictures/";
const overlayImg = document.querySelector(".overlay");
const btnClick = document.querySelector(".btn");
const imgBig = document.querySelector(".big-img-container");






axios.get(imgApi).then((response) => {
    const resImg = response.data;
    console.log(resImg);
    resImg.forEach(element => {

        const divCard = document.createElement("div");
        divCard.classList.add("card");

        let insertImg = `
         <img class="api-img" src="${element.url}" alt="image">
         <data class="img-date data-font">${element.date}</data>
         <p> ${element.title.toUpperCase()}</p>
         <img class="pin-position" src="../img/pin.svg" alt="pin">
         `;

        divCard.innerHTML = insertImg;

        divCard.addEventListener("click", () => {

            const dsNone = overlayImg.classList.contains("ds-none")
            if (dsNone) {
                overlayImg.classList.remove("ds-none")
            } else {
                overlayImg.classList.add("ds-none")
            };

            imgBig.src = `${element.url}`;

        })

        btnClick.addEventListener("click", () => {
            overlayImg.classList.add("ds-none");
        })

        cardContainer.appendChild(divCard);
    })
})


