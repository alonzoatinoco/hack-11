const cards = document.querySelector(".cards");
const itemsCard = document.getElementById("itemsCard");
const cart = document.getElementById("cart");

let arrCards = [];

cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("cards__cardButton")) {
    const title = e.target.parentElement.firstElementChild.textContent;
    const price =
      e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.childNodes[1].textContent;
    const button = e.target.parentElement.lastElementChild;

    const card = { title, price: parseInt(price.slice(4, 7)) };
    arrCards = [...arrCards, card];
    itemsCard.textContent = arrCards.length;
    button.textContent = "Curso Agregado";
    button.setAttribute("disabled", "");
    button.style.backgroundColor = "#404bd9";
    button.style.color = "#fff";
    console.log(`Carrito de compras: ${arrCards}`);

  }
});

