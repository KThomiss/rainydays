const bestSellers = document.querySelector(".bestseller-photos");

const arrayUrl = "https://ktnoroff.online/rainydays/wp-json/wc/store/products/?featured=true";

async function getFeaturedProducts() {
  const response = await fetch(arrayUrl);
  const result = await response.json();

  for (let i = 0; i < result.length; i++) {

    bestSellers.innerHTML += `<a href="../specificjacketAPI.html?id=${result[i].id}" aria-label="move to jacket on img">
                                <img src="${result[i].images[0].src}" class="bestsellers-photos" alt="picture of jacket"></img>
                              </a>`;
  }

}
getFeaturedProducts();