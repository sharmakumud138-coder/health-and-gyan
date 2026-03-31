function login() {
    let user =
document.getElementById("username").Value;
 let pass =
 document.getElementById("password").value;

  if(user === "admin"&& pass === "1234") {
    alert("Login Successful");
  } else {
     alert("Wrong Username or Password");
  }

  function toggleDark() {

  document.body.classList.toggle("dark");
  }
let images = ["images/img1.jpg","images/img2.jpg","images/img3.jpg"];
let i = 0;

function changeImage() {
  i++;
  if(i >= images.length) {
    i=0;
  }

document.getElementById("slide").src = images[i];
}

setInterval(changeImage, 2000);
}