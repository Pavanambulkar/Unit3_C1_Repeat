//store the products array in localstorage as "products"

function ProductData(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

let arr = JSON.parse(localStorage.getItem("products")) || [];

function AdminPanel(event){
    event.preventDefault();
    let form = document.getElementById("products");
    let type1 = form.type.value;
    let desc1 = form.desc.value;
    let price1 = form.price.value ;
    let image1 = form.image.value;

    let p1 = new ProductData(type1,desc1,price1,image1);
    // console.log(p1);
    arr.push(p1);
    console.log(arr);
    document.getElementById("type").value = null;
    document.getElementById("desc").value = null;
    document.getElementById("price").value = null;
    document.getElementById("image").value = null;

    localStorage.setItem("products", JSON.stringify(arr))
    alert("Item Added")
}
