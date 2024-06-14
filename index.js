const products = [{
     
     name: "Syltherine",
     price: 2500000,
     image: "produto1.jpg",
     description: "stylish cafe hair"

},

{
    name: "Leviosa",
    price: 2500000,
    image: "produto2.jpg",
    description: "stylish cafe chair"

},

{
    name:"Lolito",
    price: 7000000,
    image: "produto3.jpg",
    description: "Luxury big sofa"

},

{
    name: "Respira",
    price: 500000,
    image: "produto4.jpg",
    description: "Outdoor bar table and stool"

}]

const container = document.getElementById('product-container');


products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>Preço: R$ ${product.price.toFixed(2)}</p>
  `;

  container.appendChild(productCard);
});