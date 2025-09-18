// dichiarazione tag html e API
const cardContainer = document.querySelector(".container-card");
const imgApi = "https://lanciweb.github.io/demo/api/pictures/";
const overlayImg = document.querySelector(".overlay");
const btnClick = document.querySelector(".btn");



axios.get(imgApi).then((response) => {
    const resImg = response.data;
    console.log(resImg);
    let insertImg = "";
    resImg.forEach(element => {
        insertImg += `
         <div class="card">
         <img class="api-img" src="${element.url}" alt="image">
         <data class="img-date data-font">${element.date}</data>
         <p> ${element.title.toUpperCase()}</p>
         <img class="pin-position" src="../img/pin.svg" alt="pin">
         </div>
         `;
    })
    cardContainer.innerHTML = insertImg;

    const cardImg = document.querySelectorAll(".card")

    cardImg.forEach(overlayBtn => {
        overlayBtn.addEventListener("click", () => {

            const dsNone = overlayImg.classList.contains("ds-none")
            if (dsNone) {
                overlayImg.classList.remove("ds-none")
            } else {
                overlayImg.classList.add("ds-none")
            };
            resImg.forEach(element => {
                selectImg = `
         <img class="img-overlay" src="${element.url}" alt="image">         
         `;
                overlayImg.innerHTML = selectImg;
            })

        })

        btnClick.addEventListener("click", () => {
            overlayImg.classList.add("ds-none");
        })
    })


});