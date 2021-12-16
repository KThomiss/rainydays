const queryString = document.location.search;

const parameter = new URLSearchParams(queryString);

const productId = parameter.get("id");

const queryUrl = "https://ktnoroff.online/rainydays/wp-json/wc/store/products/" + productId;

const loadingContainer = document.querySelector(".loadingContainer");
const pictureContainer = document.querySelector(".specificpage-left");
const specificJacketInfo = document.querySelector(".specificJacket-info");
const description = document.querySelector(".jacketInfo");

async function getProductId() {
    const response = await fetch(queryUrl);
    const result = await response.json();

    loadingContainer.innerHTML = ""

    pictureContainer.innerHTML = `<img src="${result.images[0].src}" class="specificjacket-picture" alt="picture of jacket"></img>`

    description.innerHTML = `<p><strong>Description</strong></p>
                             <p>${result.description}</p>
                             <p><strong>Price:</strong> ${result.prices.price} ${result.prices.currency_code}</p>`

}
getProductId()