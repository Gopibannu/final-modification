function login(){
  let a1 = document.getElementById("username").value;
  let b1 =document.getElementById("password").value;
  let a = "bannu@gmail.com";
  let b = "bannu@123";
  if(a1==a && b1 == b){
    window.location.href = "dashboard.html";
  }
  else{
    alert("No account Found Please sign up");
    window.location.href ="signup.html";
  }
  
}