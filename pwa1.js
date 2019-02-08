function loadJSON(file,callback) {
  let  xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
    }
  xhr.send(null);
  }
  loadJSON("data.json",function(text) {
    let data=JSON.parse(text);
    console.log(data);
  //define a function
      card1(data.card1);
      card2(data.card2);
  })
  let cards=document.querySelector(".cards");
  //creating function
  function card1(details1) {
let card=document.createElement("div");
card.classList.add("card");
cards.appendChild(card);
let image=document.createElement("img");
image.src=details1.image;
image.alt="image";
card.appendChild(image);
let name=document.createElement("h2");
name.textContent=details1.name;
card.appendChild(name);
let occupation=document.createElement("h3");
occupation.textContent=details1.occupation;
card.appendChild(occupation);
let a=document.createElement("a");
a.href="resume.html";
card.appendChild(a);
let profile=document.createElement("h2");
profile.textContent=details1.profile;
a.appendChild(profile);
  }
function card2(details2) {
let card=document.createElement("div");
card.classList.add("card");
cards.appendChild(card);
let image=document.createElement("img");
image.src=details2.image;
image.alt="image";
card.appendChild(image);
let name=document.createElement("h2");
name.textContent=details2.name;
card.appendChild(name);
let occupation=document.createElement("h3");
occupation.textContent=details2.occupation;
card.appendChild(occupation);
let a=document.createElement("a");
a.href="resume.html";
card.appendChild(a);
let profile=document.createElement("h2");
profile.textContent=details2.profile;
a.appendChild(profile);
  }
