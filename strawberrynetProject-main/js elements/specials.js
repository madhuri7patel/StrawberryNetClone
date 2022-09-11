let giftsets = document.getElementById("giftsets");
giftsets.addEventListener("mouseleave", changeori);
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
text.addEventListener("mouseenter", changeblue);
text2.addEventListener("mouseenter", changeblue2);
text3.addEventListener("mouseenter", changeblue3);
function changeblue() {
  text.style.color = "#D1C4E9";
}
function changeblue2() {
  text2.style.color = "#D1C4E9";
}
function changeblue3() {
  text3.style.color = "#D1C4E9";
}
function changeori() {
  text.style.color = "#7E57C2";
  text2.style.color = "#7E57C2";
  text3.style.color = "#7E57C2";
}

//da32f09f6311aca662588aeda28758dfb5b2fec6feacf4d9c05d11876981ad1a
//search?engine=google_product
async function fetchd() {
  let res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=Beauty+products&google_domain=google.com&hl=en&tbm=shop&start=25&num=25&api_key=a7045d2eebab85bbc1dc3b6f8077dfb18392b5c6137b39c8e7ecb7ff5e572415`
  );
  let data = await res.json();
  showprod(data.shopping_results);
  console.log(data);
}

let cont1 = document.getElementById("cont1");
cont1.style.display = "grid";
cont1.style.gridTemplateColumns = "auto auto auto auto";
cont1.style.gap = "2%";
var prodhead = [
  "11.11 Days suprise",
  "Best Deals",
  "Best Sellers",
  "Early Bird 11.11 Sale",
  "Natural Beauty",
  "New Arrivals",
  "11.11 Super Serums",
  "11.11 Beauty Guide",
  "11.11 One-Stop Budget Zone",
  "Holiday Giftsets Edition",
  "Holiday Hottest Offers",
  "Holiday Edition Bath",
  "Special Purchase",
  "This Month's Top 40",
  "Point Reward Program",
  "Fragrance Specials",
  "New Customer Offer",
  "Download Our App",
  "11.11 Super Serums",
  "11.11 Beauty Guide",
  "11.11 One-Stop Budget Zone",
  "This Month's Top 40",
  "Point Reward Program",
  "Fragrance Specials",
];
var c = 0;
function showprod(d) {
  cont1.innerHTML = null;
  d.forEach((prod) => {
    //console.log(prod)
    let div = document.createElement("div");
    div.style.borderRadius = "5px";
    var col =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    div.style.backgroundColor = col;
    div.style.height = "370px";
    div.style.width = "300px";
    let head = document.createElement("p");
    head.textContent = prodhead[c];
    head.style.textAlign = "center";
    head.style.fontSize = "large";
    head.style.color = "white";
    let img = document.createElement("img");
    img.src = prod.thumbnail;
    img.style.backgroundColor = "white";
    img.style.width = "97%";
    img.style.height = "200px";
    img.style.marginLeft = "1.5%";
    let div1 = document.createElement("div");
    div1.style.backgroundColor = "white";
    div1.style.height = "120px";
    div1.style.width = "97%";
    div1.style.marginLeft = "1.5%";
    let tit = document.createElement("p");
    tit.innerText = prod.title;
    tit.style.width = "100%";
    //tit.style.height = "80px"
    tit.style.textAlign = "center";
    let pri = document.createElement("p");
    pri.innerText = prod.price;
    div1.append(tit, pri);
    div.append(head, img, div1);
    c++;
    cont1.append(div);
  });
}

async function fetchd2() {
  let res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=beauty+scoop&google_domain=google.com&hl=en&tbm=shop&start=8&num=8&api_key=a7045d2eebab85bbc1dc3b6f8077dfb18392b5c6137b39c8e7ecb7ff5e572415`
  );
  let data = await res.json();
  showprod2(data.shopping_results);
  console.log(data);
}
fetchd2();

let cont2 = document.getElementById("cont2");
cont2.style.display = "grid";
cont2.style.gridTemplateColumns = "auto auto auto auto";
cont2.style.gap = "2%";
var d = 0;
function showprod2(d) {
  cont1.innerHTML = null;
  d.forEach((prod) => {
    //console.log(prod)
    let div = document.createElement("div");
    div.style.borderRadius = "5px";
    var col =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    div.style.backgroundColor = col;
    div.style.height = "370px";
    div.style.width = "300px";
    let head = document.createElement("p");
    head.textContent = prodhead[d];
    head.style.textAlign = "center";
    head.style.fontSize = "large";
    head.style.color = "white";
    let img = document.createElement("img");
    img.src = prod.thumbnail;
    img.style.backgroundColor = "white";
    img.style.width = "97%";
    img.style.height = "200px";
    img.style.marginLeft = "1.5%";
    let div1 = document.createElement("div");
    div1.style.backgroundColor = "white";
    div1.style.height = "120px";
    div1.style.width = "97%";
    div1.style.marginLeft = "1.5%";
    let tit = document.createElement("p");
    tit.innerText = prod.title;
    tit.style.width = "100%";
    //tit.style.height = "80px"
    tit.style.textAlign = "center";
    let pri = document.createElement("p");
    pri.innerText = prod.price;
    div1.append(tit, pri);
    div.append(head, img, div1);
    d++;
    cont2.append(div);
  });
}

async function fetchd3() {
  let res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=make+up+gifts&google_domain=google.com&hl=en&tbm=shop&start=8&num=8&api_key=a7045d2eebab85bbc1dc3b6f8077dfb18392b5c6137b39c8e7ecb7ff5e572415`
  );
  let data = await res.json();
  showprod3(data.shopping_results);
  console.log(data);
}
fetchd3();
fetchd();
let cont3 = document.getElementById("cont3");
cont3.style.display = "grid";
cont3.style.marginTop = "50px";
cont3.style.gridTemplateColumns = "auto auto auto auto";
cont3.style.gap = "2%";
var prodhead = [
  "11.11 Days suprise",
  "Best Deals",
  "Best Sellers",
  "Early Bird 11.11 Sale",
  "Natural Beauty",
  "New Arrivals",
  "11.11 Super Serums",
  "11.11 Beauty Guide",
  "11.11 One-Stop Budget Zone",
  "Holiday Giftsets Edition",
  "Holiday Hottest Offers",
  "Holiday Edition Bath",
  "Special Purchase",
  "This Month's Top 40",
  "Point Reward Program",
  "Fragrance Specials",
  "New Customer Offer",
  "Download Our App",
  "11.11 Super Serums",
  "11.11 Beauty Guide",
  "11.11 One-Stop Budget Zone",
  "This Month's Top 40",
  "Point Reward Program",
  "Fragrance Specials",
];
var e = 0;
function showprod3(d) {
  cont1.innerHTML = null;
  d.forEach((prod) => {
    //console.log(prod)
    let div = document.createElement("div");
    div.style.borderRadius = "5px";
    var col =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    div.style.backgroundColor = col;
    div.style.height = "370px";
    div.style.width = "300px";
    let head = document.createElement("p");
    head.textContent = prodhead[e];
    head.style.textAlign = "center";
    head.style.fontSize = "large";
    head.style.color = "white";
    let img = document.createElement("img");
    img.src = prod.thumbnail;
    img.style.backgroundColor = "white";
    img.style.width = "97%";
    img.style.height = "200px";
    img.style.marginLeft = "1.5%";
    let div1 = document.createElement("div");
    div1.style.backgroundColor = "white";
    div1.style.height = "120px";
    div1.style.width = "97%";
    div1.style.marginLeft = "1.5%";
    let tit = document.createElement("p");
    tit.innerText = prod.title;
    tit.style.width = "100%";
    //tit.style.height = "80px"
    tit.style.textAlign = "center";
    let pri = document.createElement("p");
    pri.innerText = prod.price;
    div1.append(tit, pri);
    div.append(head, img, div1);
    e++;
    cont3.append(div);
  });
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
          showprod(oneProduct);
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
    let res = await fetch(`https://nodejs-website-strawberrynet.herokuapp.com/skincare`);
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
//https://serpapi.com/search.json?engine=google&q=latest+beauty+products&google_domain=google.com&gl=us&hl=en&tbm=shop&start=35&num=35&api_key=
