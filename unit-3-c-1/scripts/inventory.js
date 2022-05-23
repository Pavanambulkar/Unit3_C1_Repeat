let getData = JSON.parse(localStorage.getItem("products"));
console.log(getData);
getData.forEach(function(el, i){
  let box = document.createElement("div");
  box.setAttribute("id", "box");

  let image = document.createElement("img");
  image.src = el.image;

  let type = document.createElement("p");
  type.innerText = el.type;

  let desc = document.createElement("p");
  desc.innerText = el.desc ;

  let price = document.createElement("p");
  price.innerText = el.price;

  let btn = document.createElement("button");
  btn.innerText = "Remove product"
  btn.setAttribute("id", "remove_product")
  btn.addEventListener("click", function(){
      removeItem(el, i);
  });
  box.append(image, type, desc, price, btn);
  document.querySelector("#all_products").append(box)
});


function removeItem(el, i){
    console.log(el, i);
    getData.splice(i, 1);
    console.log(getData);
    localStorage.setItem("products", JSON.stringify(getData))
    window.location.reload();
}