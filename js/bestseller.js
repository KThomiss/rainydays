const bestSellers = document.querySelector(".bestseller-photos");

const arrayUrl = "https://ktnoroff.online/rainydays/wp-json/wc/store/products/?featured=true";

async function getFeaturedProducts() {
        const response = await fetch(arrayUrl);
        const result = await response.json();

        //console.log(result);

        for(i = 0; i < result.length; i++) {
            console.log(result[i]);
            console.log(result[i].id);
        }

        bestSellers.innerHTML += `<a href="specificjacketAPI.html?id=${result[i].id}"
                                    <img src="${result[i].images[0].src} class="listOfPictures></img>
                                  </a>`

}
getFeaturedProducts()