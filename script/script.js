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
                    <img src="${element.url}" alt="images" class="test">
                    
            <span>${element.date}</span>
            <p>${element.title}</p>
                </div>
                `;
        cardContainer.innerHTML = insertImg;
    })
});

