var Arrname = ["sharoz", "zxc"];
var Arrpassword = [123, 345];

function add() {
  var user = document.getElementById("name").value;
  var password = document.getElementById("pass").value;
  if (user.value == "" || password.value == "") {
    alert("pleace fill text box");
    return false;
  } else {
    Arrname.push(user);
    Arrpassword.push(password);
    // console.log(Arrname,Arrpassword)
    alert("data enter!");
    return true;
  }
}

function validation() {
  var user = document.getElementById("n");
  var password = document.getElementById("p");
// console.log(user.value,"",password.value)
  if (user.value.trim() == "" || password.value.trim() == "") {
    alert("pleace fill text box");
    return false;
  }
  for (var i = 0; i < Arrname.length; i++) {
    // console.log(user.value+""+ Arrname[i]+""+ Arrname.length)

    if (user.value == Arrname[i]) {
      if (password.value == Arrpassword[i]) {
        // alert("welcome")
        // window.open("welcome")
        return true;
      } else {
        alert("invalid   password");
        return false;
      }
    }
  }
  alert("invalid username");
  return false;
}

// serveies worker aur pwa
if ("serviceWorker" in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then(res =>{
    console.info('sw register');
  })
  .catch(err=>{
    console.error('Error in servieing in sw',err);
  });

}
else
console.log("sw not found")




