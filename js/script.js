const imageContainer = document.querySelector(".grid-container");
const loadingContainer = document.querySelector(".loadingContainer");

const arrayUrl = "https://ktnoroff.online/rainydays/wp-json/wc/store/products/";

async function getProducts() {
        const response = await fetch(arrayUrl);
        const result = await response.json();

        console.log(result);

        for(let i = 0; i < result.length; i++) {
                console.log(result[i].id);
                console.log(result[i].name);
                console.log(result[i].images[0].src);

                loadingContainer.innerHTML = ""; 

                imageContainer.innerHTML += `<a href="../specificjacketAPI.html?id=${result[i].id}">
                                                <div class="grid-child">
                                                        <img src="${result[i].images[0].src}" class="listOfPictures"></img>
                                                        <div class="grid-text"><strong>${result[i].name}</strong>
                                                        <p>${result[i].prices.price} ${result[i].prices.currency_code}</p>
                                                        </a>
                                                        <button class="cart">${result[i].add_to_cart.text}</button>
                                                        <div class="message">Added to cart</div>
                                                        </div>
                                                </div>`;
        }

}
getProducts();