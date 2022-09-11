function signup(e) {
  // e.preventDefault();
  var myForm = document.getElementById("myForm-signup");

  var name = myForm.name.value;
  var email = myForm.email.value;
  var password = myForm.password.value;

  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  let user = {
    name,
    email,
    password,
  };
  console.log("user:", user);

  let arr = JSON.parse(localStorage.getItem("users"));

  let p = document.getElementById("required");
  let p1 = document.getElementById("required1");
  let p2 = document.getElementById("required2");

  if (name.length === 0 || email.length === 0 || password.length === 0) {
    p.textContent = "*required";
    p1.textContent = "*required";
    p2.textContent = "*required";
    p.style.color = "red";
    p.style.margin = "0px";
    p1.style.color = "red";
    p1.style.margin = "0px";
    p2.style.margin = "0px";
    p2.style.color = "red";
  } else {
    arr.push(user);
    alert("New Sign up is completed");

    localStorage.setItem("users", JSON.stringify(arr));
    window.location.href = "index.html";
  }
}
