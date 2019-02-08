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
    // define  a function
    personal(data.personalDetails);
    career(data.careerObject);
    // console.log(data.careerObject);
    education(data.educationalqualifications);
    technicalskills(data.Technicalskills);
    awards(data.Awardsandachievements);
    hobbie(data.Hobbies);
  });
  var main=document.querySelector(".main");
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);
  console.log(main);

function personal(details) {

  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);

  var image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);

  var name=document.createElement("h2");
  name.textContent=details.myname;
  left1.appendChild(name);

  var des=document.createElement("h3");
  des.textContent=details.designation;
  left1.appendChild(des);

  var left2=document.createElement("div");
  left2.classList.add("left2");
  left.appendChild(left2);


  var email=document.createElement("p");
  email.textContent=details.email;
  left2.appendChild(email);

var phoneno=document.createElement("p");
phoneno.textContent=details.phoneno;
left2.appendChild(phoneno);

  var address=document.createElement("p");
  address.textContent=details.address;
  left2.appendChild(address)
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

function career(co) {
var h1 = document.createElement("h1");
h1.textContent=co.object;
right.appendChild(h1);
var p = document.createElement("p");
p.textContent=co.car;
right.appendChild(p);
// right.appendChild(document.createElement("HR"));
}
function education(edu) {
var educate=document.createElement("div");
  var h3=document.createElement("h3");
  h3.textContent="Educational Qualification:";

  right.appendChild(educate);
  educate.appendChild(h3);
  educate.appendChild(document.createElement("hr"));

  for (i in edu) {

    var h1=document.createElement("h4");
    h1.textContent=edu[i].qualifications;
    educate.appendChild(h1);

    var inst=document.createElement("p");
    inst.textContent=edu[i].inst;
    educate.appendChild(inst);
}
}
function technicalskills(ts){
    var techincalskills=document.createElement("div");
    var h3=document.createElement("h3");
    h3.textContent="technical skills";

    right.appendChild(techincalskills);
    techincalskills.appendChild(h3);
    techincalskills.appendChild(document.createElement("hr"));

    for(i in ts){

      var h1=document.createElement("h4");
      h1.textContent=ts[i].operatingsystems;
      right.appendChild(h1);

      var  org=document.createElement("p");
      org.textContent=ts[i].org;
      right.appendChild(org);
    }
  }
  function awards(aa){
    let h4=document.createElement("h4");
    h4.textContent="awardsachievements";
    right.appendChild(h4);
    right.appendChild(document.createElement("hr"));
    let p=document.createElement("p");
    p.textContent=aa.achieve;
    right.appendChild(p);

  }
  function hobbie(hs){
    let h3=document.createElement("h3");
    h3.textContent="hobbies";
    right.appendChild(h3);
    right.appendChild(document.createElement("hr"));
    let p=document.createElement("p");
    p.textContent=hs.hobbie;
    right.appendChild(p);
  }
