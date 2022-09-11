async function getdata() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  //console.log(data)
  //console.log(data.mensskincareproducts);

  showdata(data.mensskincareproducts);
}

getdata();

function showdata(products) {
  console.log(products);
  let produc = document.getElementById("products");
  produc.innerHTML = null;
  produc.style.display = "grid";
  produc.style.gridTemplateColumns = "auto auto auto auto";
  produc.style.gap = "1.5%";
  products.forEach((product) => {
    let div = document.createElement("div");
    div.style.width = "250px";
    let name = document.createElement("p");
    name.style.height = "100px";
    name.textContent = product.title;
    let price = document.createElement("p");
    price.textContent = product.price;
    let img = document.createElement("img");
    img.src = product.thumbnail;
    img.style.width = "215px";
    img.style.marginLeft = "15px";
    img.style.height = "200px";
    let button = document.createElement("button");
    button.textContent = "Best Deals";
    button.style.border = "none";
    var col =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    button.style.backgroundColor = col;
    button.style.color = "white";
    button.style.borderRadius = "5px";
    button.style.marginLeft = "70px";
    button.onclick = function () {
      gotonewarr(product);
      window.location.href = "newarr.html";
    };
    let button2 = document.createElement("button");
    button2.textContent = "Add to bag";
    button2.onclick = function () {
      Swal.fire("Good job!", "Added product to Cart Successfully", "success");
    };
    button2.style.backgroundColor = "#00A69C";
    button2.style.color = "white";
    button2.style.marginLeft = "50px";
    button2.style.border = "none";
    button2.style.borderRadius = "5px";
    let text = document.createElement("p");
    text.textContent = "Rating: " + product.rating;
    div.append(img, button, name, price, button2, text);
    produc.append(div);
  });
}
function gotonewarr(product) {
  console.log(product);
  let par = JSON.parse(localStorage.getItem("newarrdata"));
  par.push(product);
  localStorage.setItem("newarrdata", JSON.stringify(par));
}

let list = document.getElementById("list");
list.addEventListener("click", showlist);
async function showlist() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  console.log(data);
  console.log(data.mensskincareproducts);
  showdatainlist(data.mensskincareproducts);
}
function showdatainlist(products) {
  console.log(products);
  let produc = document.getElementById("products");
  produc.innerHTML = null;
  produc.style.display = "grid";
  produc.style.gridTemplateColumns = "auto";
  produc.style.gap = "10px";
  products.forEach((product) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.height = "170px";
    let name = document.createElement("h6");
    name.style.width = "530px";
    name.style.marginTop = "50px";
    name.textContent = product.source + "  " + product.title;
    let div2 = document.createElement("div");
    div2.style.width = "200px";
    div2.style.marginLeft = "10px";
    let img = document.createElement("img");
    img.src = product.thumbnail;
    img.style.width = "130px";
    img.style.height = "120px";
    let button = document.createElement("button");
    button.textContent = "Best Deals";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.marginLeft = "25px";
    button.onclick = function () {
      gotonewarr(product);
      window.location.href = "newarr.html";
    };
    var col =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    button.style.backgroundColor = col;
    button.style.color = "white";
    div2.append(img, button);
    let div3 = document.createElement("div");
    // div3.style.backgroundColor = "red"

    // SOME CHANGES
    div3.classList.add("background-image-design");
    // SOME CHANGES

    // div3.style.width = "120px";
    // div3.style.height = "120px"
    let cost = document.createElement("h5");
    cost.classList.add("h5-price-tag");
    // cost.style.height = "100px";
    cost.textContent = "Rs. " + product.price;
    div3.append(cost);
    let tobag = document.createElement("button");
    tobag.innerText = "Add to Bag";
    tobag.onclick = function () {
      Swal.fire("Good job!", "Added product to Cart Successfully", "success");
    };
    tobag.style.backgroundColor = "#00A69C";
    tobag.style.marginLeft = "30px";
    tobag.style.height = "30px";
    tobag.style.border = "none";
    tobag.style.marginTop = "60px";
    tobag.style.color = "white";
    tobag.style.borderRadius = "5px";
    div.append(name, div2, div3, tobag);
    produc.append(div);
  });
}

let grid = document.getElementById("grid");
grid.addEventListener("click", getdata);

function getchange() {
  let select = document.getElementById("select").value;
  console.log(select);
  if (select == "sortbypop") {
    showlistbypop();
  } else if (select == "lowpri") {
    lowtohi();
  } else if (select == "AtoZ") {
    atoz();
  } else if (select == "ZtoA") {
    ztoa();
  }
}
async function showlistbypop() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  console.log(data);
  console.log(data.mensskincareproducts);
  let arr = data.mensskincareproducts;
  let sor = arr.sort((a, b) => {
    return a.rating - b.rating;
  });
  console.log(sor);
  showdatainlist(sor);
}
async function lowtohi() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  console.log(data);
  console.log(data.mensskincareproducts);
  let arr = data.mensskincareproducts;
  let sor = arr.sort((a, b) => {
    return a.extracted_price - b.extracted_price;
  });
  console.log(sor);
  showdatainlist(sor);
}
async function atoz() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  console.log(data);
  console.log(data.mensskincareproducts);
  let arr = data.mensskincareproducts;
  let sor = arr.sort((a, b) => {
    return a.title - b.title;
  });
  console.log(sor);
  showdatainlist(sor);
}
async function ztoa() {
  let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
  let data = await res.json();
  console.log(data);
  console.log(data.mensskincareproducts);
  let arr = data.mensskincareproducts;
  let sor = arr.sort((a, b) => {
    return b.extracted_price - a.extracted_price;
  });
  console.log(sor);
  showdatainlist(sor);
}

// Debouncing
let timerId;
let timerId2;
function debounce() {
  let product_name = document.getElementById("inputdata").value;
  if (product_name.length > 2) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(async function () {
      await productOptions();
    }, 2000);
  } else {
    document.getElementById("productOptions").style.display = "none";
  }
}
async function productOptions() {
  try {
    var allProducts = await searchProduct();

    document.getElementById("productOptions").innerHTML = null;
    console.log(allProducts.length, document.getElementById("inputdata").value);

    allProducts.forEach(function (oneProduct) {
      let name = document.createElement("p");
      name.innerText = oneProduct.title;
      let title = oneProduct.title;
      title = title.split(" ");
      if (title.includes(document.getElementById("inputdata").value)) {
        document.getElementById("productOptions").append(name);
        name.onclick = function () {
          gotonewarr(oneProduct);
          window.location.href = "newarr.html";
        };
        document.getElementById("productOptions").style.display = "block";
      }
    });
    if (timerId2 != null) {
      clearTimeout(timerId2);
    }
    timerId2 = setTimeout(function () {
      displaynone();
    }, 9000);
  } catch (e) {
    console.log(e);
  }
}
function displaynone() {
  document.getElementById("productOptions").style.display = "none";
}
async function searchProduct() {
  try {
    querry = document.getElementById("inputdata").value;
    let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/mensskincare`);
    let data = await res.json();
    return data.skincareproducts;
  } catch (e) {
    console.log(e);
  }
}
async function searchableData() {
  let data = await searchProduct();
  searchableData(data);
}
//https://serpapi.com/search.json?engine=google&q=skin+care+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=e49a0f332c094848e532986cf73547b488cdfb3006985473e559d3d9c8194354
//https://serpapi.com/search.json?engine=google&q=Men+Skincare+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=40&num=40&api_key=e49a0f332c094848e532986cf73547b488cdfb3006985473e559d3d9c8194354
