// Animation à l'arrivée des cards sur index.html
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150); // décalage progressif
  });

  // Animation d'apparition sur la page produit
  const productDetail = document.getElementById("product-detail");
  if (productDetail) {
    productDetail.style.opacity = 0;
    productDetail.style.transform = "scale(0.9)";
    setTimeout(() => {
      productDetail.style.transition = "0.5s ease";
      productDetail.style.opacity = 1;
      productDetail.style.transform = "scale(1)";
    }, 100);
  }

  // Animation sur le bouton "Ajouter au panier"
  const addToCartBtn = document.getElementById("add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCartBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        addToCartBtn.style.transform = "scale(1)";
      }, 150);
    });
  }
});
