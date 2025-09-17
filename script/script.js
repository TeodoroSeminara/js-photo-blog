// dichiarazione tag html e API
const cardContainer = document.querySelector(".container-card");
const imgApi = "https://lanciweb.github.io/demo/api/pictures/";




axios.get(imgApi).then((response) => {
    const resImg = response.data;
    console.log(resImg);
    let insertImg = "";

    resImg.forEach(element => {
        insertImg += `
         <figure class="card">
         <img src="${element.url}" alt="">
         <figcaption>${element.date} <br> ${element.title.toUpperCase()}</figcaption>
         </figure>

                `;
        cardContainer.innerHTML = insertImg;
    })
});



// <div class="card">
//     <img src="${element.url}" alt="images">
//     <data class="img-date">${element.date}</data>
//     <p class="img-p">${element.title}</p>
// </div>