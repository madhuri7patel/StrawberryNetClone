var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}

// product script

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

// product for front pages

let data = [
    {
      id: "1001",
      title:"Bottega Veneta Eau De Parfum Spray 75ml/2.5oz",
      price: 1050.59,
      thumbnail: "https://a.cdnsbn.com/images/products/250/13101119406.jpg",
    },
    {
      id: "1002",
      title:"Elizabeth Arden Ceramide Vitamin C Capsules - Radiance Renewal Serum 90caps",
      price: 626.90,
      thumbnail: "https://a.cdnsbn.com/images/products/250/26636580501.jpg",
    },
    {
      id: "1003",
      title:"Jo Malone Blackberry & Bay Body Creme 175ml/5.9ozodie[yellow]",
      price: 725.45,
      thumbnail:  "https://a.cdnsbn.com/images/products/250/21776389503.jpg",
    },
    {
      id: "1004",
      title:"Moroccanoil Moisture Repair Shampoo (For Weakened and Damaged Hair) 1000ml/33.8oz",
      price: 544.10,
      thumbnail:  "https://a.cdnsbn.com/images/products/250/17653399444.jpg",
    },
    {
      id: "1005",
      title:  "NARS Powermatte Lip Pigment - # Call Me (Coral) 5.5ml/0.18oz",
      price: 141.95,
      thumbnail: "https://b.cdnsbn.com/images/products/250/25379702602.jpg",
    },
  
    {
      id: "1005",
      title:  "Olaplex No. 3 Hair Perfector 100ml/3.3oz",
      price: 228.79,
      thumbnail: "https://b.cdnsbn.com/images/products/250/25401885944.jpg",
    },
  
    {
      id: "1005",
      title: 
      "Shu Uemura Eyelash Curler",
      price: 141.95,
      thumbnail: "https://b.cdnsbn.com/images/products/250/05570877709.jpg",
    },
  
    {
      id: "1005",
      title: 
      "Skin Ceuticals H.A Intensifier - Hyaluronic Acid Intensifier 30ml/1oz",
      price: 175.99,
      thumbnail: "https://b.cdnsbn.com/images/products/250/21144796301.jpg",
    },
    // 11.11 BUDGET ZONE
    {
      id: "1005",
      title: "Clean Reserve Velvet Flora Eau De Parfum Spray 100ml/3.4oz",
      price: 386.99,
      thumbnail: "https://a.cdnsbn.com/images/products/250/22186199906.jpg",
    },
  
    {
      id: "1005",
      title: "Dolce & Gabbana Pour Femme Eau De Parfum Spray 50ml/1.6oz",
      price: 378.50,
      thumbnail: "https://a.cdnsbn.com/images/products/250/14877939506.jpg",
    },
  
    {
      id: "1005",
      title: "Estee Lauder New Dimension Firm + Fill Eye System 10ml/0.34oz",
      price: 339.10,
      thumbnail: "https://a.cdnsbn.com/images/products/250/20143580601.jpg",
    },
  
    {
      id: "1005",
      title: "Ipsa Cleansing Gel Ex 150g/5oz",
      price: 283.90,
      thumbnail: "https://a.cdnsbn.com/images/products/250/14642226801.jpg",
    },
  
    {
      id: "1005",
      title: "Elixir Ultime Le Masque Sublimating Oil Infused Masque (Dull Hair) 200ml/6.8oz",
      price: 441.99,
      thumbnail: "https://b.cdnsbn.com/images/products/250/23431000444.jpg",
    },
  
    {
      id: "1005",
      title: "La Roche Posayv Lipikar Surgras Concentrated Shower-Cream 200ml/6.7oz",
      price: 118.50,
      thumbnail: "https://b.cdnsbn.com/images/products/250/14772408103.jpg",
    },
  
    {
      id: "1005",
      title: "Full Of Promise Treatment Duo For Uplifting Days & Voluminizing Nights 30ml/1oz",
      price: 390.50,
      thumbnail: "https://b.cdnsbn.com/images/products/250/16277691101.jpg",
    },
  
    {
      id: "1005",
      title: "Ultimune Power Infusing Concentrate - ImuGeneration Technology 30ml/1oz",
      price: 31.99,
      thumbnail: "https://b.cdnsbn.com/images/products/250/22495081401.jpg",
    },

  // DAILY SPECIALS
 //changing
     {
       id: "1005",
       title: "Burberry London Eau De Toilette Spray 100ml/3.4oz",
       price: 354.85,
       thumbnail: "https://a.cdnsbn.com/images/products/250/05527536005.jpg",
     },
      
    {
      id: "1005",
      title: "Bvlgari Petits Et Mamans Eau De Toilette Spray 100ml/3.3oz",
      price: 433.70,
      thumbnail: "https://a.cdnsbn.com/images/products/250/02144435006.jpg",
    },
  
    {
      id: "1005",
      title: "Christian Dior Eau Sauvage Deodorant Stick (Alcohol Free) 75g/2.5oz",
      price: 229.50,
      thumbnail: "https://a.cdnsbn.com/images/products/250/06716480103.jpg",
    },
  
    {
      id: "1005",
      title: "Scarlet Poppy Cologne Intense Spray (Originally Without Box) 100ml/3.4oz",
      price: 1537.50,
      thumbnail: "https://a.cdnsbn.com/images/products/250/26178189506.jpg",
    },
  
    {
      id: "1005",
      title: "Loewe 001 Man Eau De Parfum Spray 100ml/3.3oz",
      price: 562.50,
      thumbnail: "https://b.cdnsbn.com/images/products/250/25040937905.jpg",
    },
  
    {
      id: "1005",
      title: "Serge Lutens Les Eaux De Politesse L'Eau D'Armoise Eau De Parfum Spray 100ml/3.3oz",
      price: 750.50,
      thumbnail: "https://b.cdnsbn.com/images/products/250/23871389106.jpg",
    },
  
    {
      id: "1005",
      title: "Tiffany & Co. Intense Eau De Parfum Spray 50ml/1.7oz",
      price: 780.50,
      thumbnail: "https://b.cdnsbn.com/images/products/250/23133033606.jpg",
    },
  
    {
      id: "1005",
      title: "Versace Bright Crystal Eau De Toilette Spray 90ml/3oz",
      price: 544.99,
      thumbnail: "https://b.cdnsbn.com/images/products/250/05505286606.jpg",
    },
];
let parent = document.getElementById("products");
function showProducts() {
  data.forEach(function (product) {
    console.log(product.title);
    console.log(product.price);

    let div = document.createElement("div");

    let img = document.createElement("img");

    img.src = product.thumbnail;

    let prod_price = document.createElement("p");
    prod_price.textContent = product.price;

    let prod_name = document.createElement("p");
    prod_name.textContent = product.title;
    prod_name.style.height = "40px";
    let addtocart_btn = document.createElement("button");
    addtocart_btn.innerText = "Add to Bag";

    addtocart_btn.onclick = function () {
      addtoCart(product);
    };

    div.append(img, prod_name, prod_price, addtocart_btn);

    parent.append(div);
  });
}
showProducts();

if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify([]));
}
let sum = 0;
var counter = 0;
function addtoCart(p) {
  console.log(p);

  fetch("https://nodejs-website-strawberrynet.herokuapp.com/cart", {
    method: "POST",
    body: JSON.stringify(p),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      return Swal.fire(
        "Good job!",
        `Added ${p.title} to Cart Successfully`,
        "success"
      );
    })
    .catch((e) => {
      return alert("Something went wrong");
    });

  let kohl_cart = JSON.parse(localStorage.getItem("cart"));
  kohl_cart.push(p);
  localStorage.setItem("cart", JSON.stringify(kohl_cart));

  kohl_cart.forEach(function (product) {
    sum = sum + Number(product.price);
    counter++;
  });
  console.log(Math.floor(sum));
  let par = document.getElementById("products");
  let sum1 = document.createElement("p");
  sum1.textContent = sum;
  par.append(sum1);
}
// function showalert(prod) {
//   let par = JSON.parse(localStorage.getItem("cart"));
//   let name = prod.title;
//   let price = prod.price;
//   let c = 0;
//   par.forEach(function (par) {
//     if (name === par.title && price === par.price) {
//       c++;
//     }
//   });
//   if (c >= 2) {
//     alert("Product already in cart");
//   }
// }

// top to bottom button script

var mybutton = document.getElementById("myBtnn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// timer js

var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let cont61 = document.getElementById("cont61");
cont61.style.width = "95%";
let cont612data = [
  {
    position: 1,
    title:
      "Farmasi Assorted Products Hair Skin Face - New Beauty | Color: Beige",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m39615074132/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQItwU&usg=AOvVaw2fYwAHkXecVRamZnyUgg6X",
    source: "Mercari",
    price: 55,
    extracted_price: 50,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQseC0eGi-XT8yXpWxnKYEHyFH5ld8_AyaZ4TCb8Cn3HeX3BlZ6v7aSloVbjbU&usqp=CAE",
    delivery: "9.99 delivery",
  },
  {
    position: 2,
    title:
      "Custom Variety Pack Mini/travel Skincare & Hair Products - New Beauty | Color: Pink",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m89798210446/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIwgU&usg=AOvVaw2naCofa4PF-zBGNY7xhgWy",
    source: "Mercari",
    price: 200,
    extracted_price: 180,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXCx4Dlt6VsuUVa93wjMqndcKYM6CtGqKSnchLPcDSJy_lgqmGk2TmIGXFouo&usqp=CAE",
    delivery: "12.00 delivery",
  },
  {
    position: 3,
    title: "Skincare - New Beauty",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m82356037152/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIzQU&usg=AOvVaw1ozHB7mM1gnt1vyPZI2LWB",
    source: "Mercari",
    price: 23,
    extracted_price: 18,
    disc: "20%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlO30Q2SAPn3_c5CGBiEGMCQZLm6XBdRB3R5eVDsdi8gisyW5GYAkH6wRL0g&usqp=CAE",
    delivery: "11.50 delivery",
  },
  {
    position: 4,
    title: "Face Product - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m64785865089/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI2QU&usg=AOvVaw11d-Cfndx79E9CWY8iOKqS",
    source: "Mercari",
    price: 95,
    extracted_price: 80,
    disc: "18%",
    extensions: ["For All Skin Types"],
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSr6lNUOJ6F7HnIoEtejrF0GKp0XUvEvuv3E8LxIwJRzi9J84UAkwIqeW4KODw&usqp=CAE",
    delivery: "12.00 delivery",
  },
  {
    position: 5,
    title:
      "Custom Variety Pack Sampler Lot Of Skin Care Products 64 - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m77082157065/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI5AU&usg=AOvVaw2uYuz5EFo0RtImBya-6Qoy",
    source: "Mercari",
    price: 100,
    extracted_price: 80,
    disc: "20%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSllSlI_C8Kgd5MW_trZnlUzBjj3ULelu19Uun_8hcZzynR51xtQ_wM5_6iSQ&usqp=CAE",
    delivery: "11.50 delivery",
  },
];
let cont611data = [
  {
    position: 6,
    title:
      "Sephora HUGE Luxury Skincare Lot! 52 NEW Items - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m40847971702/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI7wU&usg=AOvVaw3dMGghA4y8MeVd-siMEtVT",
    source: "Mercari",
    price: 105,
    extracted_price: 100,
    disc: "5%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR22OyEP_F26T8sYDFdlfX2bCFoIuKyBZp42-Y-OnggYgYlJHMp1e0Mv4jxf6w&usqp=CAE",
    delivery: "12.00 delivery",
  },
  {
    position: 7,
    title: "Sephora Skincare - New Beauty | Color: Black",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m63045964760/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI-gU&usg=AOvVaw0xiob-WwFa64zDlFv7qehf",
    source: "Mercari",
    price: 10,
    extracted_price: 1,
    disc: "0%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4c6h4xN9cQg1K2TATLctej7or_vicxgzQUWpjTUwDZEmqNQpubRzz17laOtA&usqp=CAE",
    delivery: "11.50 delivery",
  },
  {
    position: 8,
    title: "Bundle Of All Product - New Beauty | Color: Black",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m39414803012/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIhQY&usg=AOvVaw3g6J-x_EFZCkMqXHnq5mvN",
    source: "Mercari",
    price: 50,
    extracted_price: 5,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQmAzvEZi_mbc7BGPI-L35kS7JDjDv21-_FKWwikmvWG58GGPr-8NIxNyynw&usqp=CAE",
    delivery: "11.50 delivery",
  },
  {
    position: 9,
    title: "Sephora Skincare - New Beauty | Size: m",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m34155211429/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIkAY&usg=AOvVaw2Dp-5wj130MrxS4I9omDEd",
    source: "Mercari",
    price: 25,
    extracted_price: 20,
    disc: "20%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ44Eh90iUFjbJVzYzsNdKEPE_c6sG3nBVitCGpdgjTwL6obrhchd41Nt76G1Q&usqp=CAE",
    delivery: "3.65 delivery",
  },
  {
    position: 10,
    title: "Lot Of Beauty Products - New Beauty | Color: Purple",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m26608467678/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQInAY&usg=AOvVaw0Y_C-dh-YwMjkAl9ntxm9a",
    source: "Mercari",
    price: 24,
    extracted_price: 23,
    disc: "2%",
    extensions: ["Palette"],
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXEMFhn4jGYKrTMboK8UuA94qVpS5vpZMHdIMjNIrbGUo9_J3cXvVqV3LdHA&usqp=CAE",
    delivery: "5.99 delivery",
  },
];
let cont613data = [
  {
    position: 11,
    title: "Lott Of Beauty Products - New Face | Color: Pink",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m46108373399/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIpwY&usg=AOvVaw3N5Y4JEvAvurN_8cOoHDGf",
    source: "Mercari",
    price: 160,
    extracted_price: 150,
    disc: "3%",
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAUhkunrfAsS6-WsAY2KLV33gaKWi6Wo4V8N3VBlPmjzjloNocYHZExSb3sSs&usqp=CAE",
    delivery: "9.99 delivery",
  },
  {
    position: 12,
    title:
      "Custom Variety Pack Skin Care Bundle PICK THE ITEMS YOU WANT - New Beauty | Color ...",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m97945815890/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIsgY&usg=AOvVaw0PMBqloAarhrgC1rRl8nnY",
    source: "Mercari",
    price: 12,
    extracted_price: 1,
    disc: "0%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFZbtyT--38mhRxbYWIwuCPfibdMw3nbGUG3ut4YMzujU9rA97eBM7FULalg&usqp=CAE",
    delivery: "11.50 delivery",
  },
  {
    position: 13,
    title: "This My Product - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m18241594274/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIvQY&usg=AOvVaw3r_q3i1O_vMUdRer849vsE",
    source: "Mercari",
    price: 19,
    extracted_price: 8,
    disc: "0.5%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlkwA3sutY8qXwVNxohl5aY69KZWmesauAo5fNdZDI3HNoByWi-UhC42Nhbw&usqp=CAE",
    delivery: "12.00 delivery",
  },
  {
    position: 14,
    title: "BEAUTY/SKINCARE LOT *MSRP: 52* - New Skin care",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m89081410071/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIyAY&usg=AOvVaw1g5lb4AbnT4i3At_0UQJDq",
    source: "Mercari",
    price: 20,
    extracted_price: 18,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjTPlDoUi1gUfuuoaqV3-0Oa9zYg8zppXoEuyK9qoAX6zVBvO62aq0kPq7Zc7SQje1cyBcsS1Z&usqp=CAE",
    delivery: "5.99 delivery",
  },
  {
    position: 15,
    title:
      "Huge Lot Various Makeup Skincare Hair & Body Care, Over 100 Samples New - New Beauty",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m20512670992/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI0wY&usg=AOvVaw2HLlL-zTSBOl22_35nXnEF",
    source: "Mercari",
    price: 50,
    extracted_price: 45,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_W72LYIKNLF4NvNokE3B2cUxplTk_cnZ8Rky39v3RXD-OhPT7hyV-IHBTdek&usqp=CAE",
    delivery: "13.50 delivery",
  },
];

var cont614data = [
  {
    position: 16,
    title:
      "RADIALABS INSTANT FACE CARE SYSTEM 4 FAC - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m99471867614/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI3gY&usg=AOvVaw1OJgEWcugllUnDAl_3nRuO",
    source: "Mercari",
    price: 30,
    extracted_price: 25,
    disc: "15%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJQyfr7eWiw9gToAWfFSkD2JSjfJxE4-Byl-GU61QbosA39h4XSXk6psiqNg&usqp=CAE",
    delivery: "11.00 delivery",
  },
  {
    position: 17,
    title: "Sephora HUGE HIGH-END SKINCARE BUNDLE - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m78835097824/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI6QY&usg=AOvVaw24-45A2KzFopHsPgyCzsdc",
    source: "Mercari",
    price: 159,
    extracted_price: 149,
    disc: "6%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0lyWeMxHy4uCG81L7m3dHgw3VJQdCec56bALpV5UAPEUsrk7Bzm1Oi6H6SA&usqp=CAE",
    delivery: "9.99 delivery",
  },
  {
    position: 18,
    title: "Beauty Products - New Beauty",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m50006691739/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI9AY&usg=AOvVaw1fhAXO1hXm-fhQQybVxOEi",
    source: "Mercari",
    price: 14,
    extracted_price: 12,
    disc: "18%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZDCUtFXo-S0lNvUPBNIJtrovlDgbKmUOQEGHAZczBWIaonn0vHIRXl1HPN8ujssJDNyLotuc&usqp=CAE",
    delivery: "3.49 delivery",
  },
  {
    position: 19,
    title:
      "Makeup Bundle Large Lot New Beauty Products Hair - New Beauty | Color: Black ...",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m35544222384/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQI_wY&usg=AOvVaw2WaL5GrlVNyNXd5HDs5bcm",
    source: "Mercari",
    price: 162,
    extracted_price: 152,
    disc: "6%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUPFe8WPkv5rKnR1arrpCCYx3B0kgl8gbYPBMarFDf8AMsolA_7JtgpltZ5Q&usqp=CAE",
    delivery: "17.75 delivery",
  },
  {
    position: 20,
    title:
      "NEW Prestige Beauty Bundle 170 Value - New Beauty | Color: White | Size: l",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m31334606380/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIigc&usg=AOvVaw2dhcgDfFAqPdvno0KSUQeL",
    source: "Mercari",
    price: 100,
    extracted_price: 90,
    disc: "10%",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ39TQvTZQJNRYObSywlm_E6zsmkx8HVKzXYtEHvYH6pk7MtfqkSUYFf0-Q_v6BCtFbjRkLtgo&usqp=CAE",
    delivery: "Free delivery",
  },
];

var cont615data = [
  {
    position: 21,
    title: "Verb Good Skin Body Kit",
    link: "https://www.google.com/url?url=https://www.verbproducts.com/products/good-skin-body-care-kit%3Fvariant%3D39395842195545%26currency%3DUSD%26utm_medium%3Dproduct_sync%26utm_source%3Dgoogle%26utm_content%3Dsag_organic%26utm_campaign%3Dsag_organic&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCC5QQIlQc&usg=AOvVaw2CNgfVR92KJlaG4grg_NX2",
    product_link: "https://www.google.com/shopping/product/6799111075715241080",
    product_id: "6799111075715241080",
    serpapi_product_api:
      "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&product_id=6799111075715241080&start=35",
    source: "Verb Products",
    price: 26,
    extracted_price: 25,
    disc: "6%",
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvIWKV15-h4i1fm0TGrwkfDHmpNipd_i-KxJwAUSFd1sCFQpXolDCPLCW0OQzLsvKZrGtkBAeJ&usqp=CAE",
    delivery: "Delivery by Wed, Nov 17",
  },
  {
    position: 22,
    title: "Sephora Makeup And Skincare Bundle - New Beauty",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m81646070495/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIoQc&usg=AOvVaw3dXDf2NyiwqKsf9_4bauv-",
    source: "Mercari",
    price: 11,
    extracted_price: 10,
    disc: "11%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRn0AxsqL8dZPZDPs3bRMYNJT1hG9clYNNtQAyp_6YT5a6SdM3aGxHmFm0iMg&usqp=CAE",
    delivery: "3.49 delivery",
  },
  {
    position: 23,
    title:
      "New Never Used Beauty Products | Color: Red/Pink | Size: Os | Ericabarica00's Closet",
    link: "https://www.google.com/url?url=https://poshmark.com/listing/NEW-Never-Used-Beauty-Products-5eb026b03a0db9d64db2fda0%23utm_source%3Dgdm_unpaid&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIrAc&usg=AOvVaw3kTK9RiTT_nhNjSiGrfnNM",
    source: "Poshmark",
    price: 20,
    extracted_price: 18,
    disc: "5%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQP6LwpUunarInE-0bIPbLro3MeHPGcTRgmsYMP0v8_-iiZc94ea8mXYkIyQg&usqp=CAE",
    delivery: "7.45 delivery",
  },
  {
    position: 24,
    title: "Get Today - 4 BEAUTY PRODUCTS - New Beauty | Color: Pink",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m93386791801/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQItwc&usg=AOvVaw1OxmAUJZ2N746x8_syq5_e",
    source: "Mercari",
    price: 12,
    extracted_price: 10,
    disc: "13%",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSS9LN8bnQzsJ4-D4SfT1mebn4wd5-vb14TkWjJzKXmcufioJeRpeaEQeTsng&usqp=CAE",
    delivery: "4.99 delivery",
  },
  {
    position: 25,
    title: "Beauty Products - New Beauty | Color: White",
    link: "https://www.google.com/url?url=https://www.mercari.com/us/item/m69070735735/&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwjxobyFxvzzAhW8lmoFHblABQ84IxCA5QQIwgc&usg=AOvVaw11mWHQh7DvOhqCdoz3Oq3Q",
    source: "Mercari",
    price: 47,
    extracted_price: 42,
    disc: "7%",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvIFYSv029CfEyWbUibER681CLyK5ilEQFkvB9pRmd0OZXtATuRAEWkePkHo0&usqp=CAE",
    delivery: "7.99 delivery",
  },
];
cont61.style.display = "flex";
cont61.style.gap = "2%";
function show61(d) {
  cont61.innerHTML = null;
  d.forEach(function (prod) {
    let div = document.createElement("div");
    div.style.height = "400px";
    div.style.width = "18.5%";
    let img = document.createElement("img");
    img.src = prod.thumbnail;
    img.style.width = "200px";
    img.style.height = "160px";
    let name = document.createElement("p");
    name.style.color = "blue";
    name.style.width = "100%";
    name.style.height = "70px";
    name.innerText = prod.title;

    let save = document.createElement("p");
    let dis = document.createElement("span");
    dis.innerHTML = "Save Upto";
    save.style.color = "green";
    let perc = document.createElement("span");
    perc.innerText = prod.disc;
    save.append(dis, perc);

    let pr = document.createElement("p");
    pr.innerText = prod.price;
    let price = document.createElement("p");
    let pricesy = document.createElement("span");
    pricesy.innerHTML = "&#36;";
    price.style.marginLeft = "2%";
    let pricemo = document.createElement("span");
    pricemo.innerText = prod.extracted_price;
    pr.style.textDecoration = "line-through";
    price.append(pricesy, pricemo);
    let addtocartbtn = document.createElement("button");
    addtocartbtn.innerText = "Add to bag";
    addtocartbtn.backgroundColor = "white";
    addtocartbtn.style.marginLeft = "2%";
    addtocartbtn.onclick = function () {
      addtoCart(prod);
      showalert(prod);
    };
    div.append(img, name, save, pr, price, addtocartbtn);
    cont61.append(div);
  });
}
show61(cont611data);

let swapleft = document.getElementById("swapleft");
let swapright = document.getElementById("swapright");

swapleft.addEventListener("click", swapleftfun);
let a = 0;
let b = 0;
function swapleftfun() {
  a--;
  if (a == -1 || a == 0) {
    show61(cont611data);
  } else if (a == -2) {
    show61(cont612data);
  } else if (a == -3) {
    show61(cont613data);
  } else if (a == -4) {
    show61(cont614data);
  } else if (a == -5) {
    show61(cont615data);
    a = 0;
  }
}
function swaprightfun() {
  b++;
  if (b == 0 || b == 1) {
    show61(cont611data);
  } else if (b == 2) {
    show61(cont612data);
  } else if (b == 3) {
    show61(cont613data);
  } else if (b == 4) {
    show61(cont614data);
  } else if (b == 5) {
    show61(cont615data);
    b = 0;
  }
}

swapright.addEventListener("click", swaprightfun);

//SIGN IN FUCNTIONALITY
// LOGIN PART JS
let body = document.body;
// let str = "";
function login() {
  let a = document.getElementById("login");
  a.style.top = "80px";
  a.style.left = "33%";
  body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  // body.backgroundColor = null;
}

function cancel() {
  document.getElementById("login").style.top = "-800px";
  body.style.backgroundColor = "white";
}

function signin(event) {
  // event.preventDefault();
  var myForm = document.getElementById("myForm-signin");

  var email1 = document.getElementById("email-input").value;
  var password1 = document.getElementById("password-input").value;

  let userdetail = JSON.parse(localStorage.getItem("users"));

  // document.getElementById('append-name').textContent = null;

  userdetail.forEach(function (userdetail) {
    if (userdetail.email === email1 && userdetail.password === password1) {
      //   document.getElementById('append-name').textContent = user.name;
      //   console.log(user.name);
      alert("logged in successfully");
    } else {
      alert("logged in successfully");
    }
  });
}

// LOGIN PART JS
