const imageContainer = document.querySelector(".grid-container");
const loadingContainer = document.querySelector(".loadingContainer");

const arrayUrl = "https://ktnoroff.online/rainydays/wp-json/wc/store/products/";

async function getProducts() {
        const response = await fetch(arrayUrl);
        const result = await response.json();

        for(let i = 0; i < result.length; i++) {

                loadingContainer.innerHTML = ""; 

                imageContainer.innerHTML += `<a href="../specificjacketAPI.html?id=${result[i].id}">
                                                <div class="jacket-card">
                                                        <img src="${result[i].images[0].src}" class="listOfPictures" alt="picture of jacket"></img>
                                                        <div class="grid-text"><strong>${result[i].name}</strong>
                                                        <p>${result[i].prices.price} ${result[i].prices.currency_code}</p>
                                                </div></a>`;

                //Repeat just get some more content on the page
                imageContainer.innerHTML += `<a href="../specificjacketAPI.html?id=${result[i].id}">
                                                <div class="jacket-card">
                                                        <img src="${result[i].images[0].src}" class="listOfPictures"></img>
                                                        <div class="grid-text"><strong>${result[i].name}</strong>
                                                        <p>${result[i].prices.price} ${result[i].prices.currency_code}</p>
                                                </div></a>`;
        }
}
getProducts();