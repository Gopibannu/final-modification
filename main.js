function checksearch(){
  let a = document.getElementById("search").value;
  if(a=="Phishing"){
    window.location.href = "phishing.html";
  }
  else{
    alert("No results Found"+a)
  }
}