// dichiarazione tag html e API
const cardContainer = document.querySelector(".container-card");
const imgApi = "https://lanciweb.github.io/demo/api/pictures/";




axios.get(imgApi).then((response) => {
    const resImg = response.data;
    console.log(resImg);
    let insertImg = "";

    resImg.forEach(element => {
        insertImg += `
         <div class="card">
         <img class="pin-position" src="../img/pin.svg" alt="pin">
         <img src="${element.url}" alt="image">
         <data class="img-date">${element.date}</data>
         <p> ${element.title.toUpperCase()}</p>
         </div>
         `;
        cardContainer.innerHTML = insertImg;
    })
});



// <div class="card">
//     <img src="${element.url}" alt="images">
//     <data class="img-date">${element.date}</data>
//     <p class="img-p">${element.title}</p>
// </div>