let slide = document.getElementById("payment");
function check(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let bankname = document.getElementById("bankname").value;
  let mobileno = document.getElementById("mobileno").value;
  let accountno = document.getElementById("accountno").value;
  let password = document.getElementById("password").value;

  if (
    name == "" ||
    bankname == "" ||
    mobileno == "" ||
    accountno == "" ||
    password == ""
  ) {
    alert("Incomplete Information");
  } else {
    alert("Thank you for Payment");

    let inter;
    function start() {
      inter = setInterval(function () {
        slide.innerHTML = null;
        let img = document.createElement("img");
        img.src =
          "https://urbanutilities.co.za/wp-content/uploads/2019/08/Payment-success.png";
        img.style.width = "1000px";
        img.style.marginLeft = "-200px";
        img.style.height = "450px";
        slide.append(img);
      }, 3000);
    }
    start();
  }
  //console.log(name)
}

let pay = document.getElementById("pay");

let par = JSON.parse(localStorage.getItem("paymen"));
console.log(par.price);
//console.log(par.length)
par.forEach(function (par) {
  pay.innerHTML = null;
  pay.append(par.price);
});
