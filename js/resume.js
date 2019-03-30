var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query)
{
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;

if(!idb in window)
{
  console.log("indexedDB is not supported");
}
var open=idb.open("storeData",1);

console.log("indexedDb is created");

open.onupgradeneeded=function (e)
{
  var request=e.target.result;
  var  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("Store is created");
}
open.onerror=function(error)
{
 console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    personalinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi)
{
  var h1=document.createElement("h2");
  h1.textContent="Profile";
  left.append(h1);
    left.append(document.createElement("hr"));

  var image=document.createElement("img");
  image.src="images/instagram.svg";
  image.alt=pi.name;
  left.append(image);

  left.append(document.createElement("br"));

  var name=document.createElement("name");
  name.textContent=pi.name;
  left.append(name);

  left.append(document.createElement("br"));

  var age=document.createElement("age");
  age.textContent=pi.age;
  left.append(age);
  left.append(document.createElement("br"));
  var gender=document.createElement("gender");
  gender.textContent=pi.gender;
  left.append(gender);
  left.append(document.createElement("br"));
  var phno=document.createElement("phno");
  phno.textContent=pi.phno;
  left.append(phno);
  left.append(document.createElement("br"));
  var email=document.createElement("email");
  email.textContent=pi.email;
  left.append(email);
  left.append(document.createElement("br"));
  var address=document.createElement("address");
  address.textContent=pi.address;
  left.append(address);
  left.append(document.createElement("br"));

  var h1=document.createElement("h2");
  h1.textContent="Carrer Details";
  right.append(h1);
  right.append(document.createElement("hr"));
  var carrer=document.createElement("carrer");
  carrer.textContent=pi.carrer;
  right.append(carrer);

  var h1=document.createElement("h2");
  h1.textContent="Educational Details";
  right.append(h1);
  right.append(document.createElement("hr"));

  var head11=document.createElement("education");
  right.append(head11);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
  var tr2="";
  for(var i in pi.education)
  {
    tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"
    +pi.education[i].branch+"</td><td>"
    +pi.education[i].year+"</td><td>"
    +pi.education[i].percentage+"</td></tr>"
  }
  table.innerHTML=tr1+tr2;
  right.append(table);

  var h1=document.createElement("h2");
  h1.textContent="Skills";
  right.append(h1);
  right.append(document.createElement("hr"));
  var skills=document.createElement("skills");
  skills.textContent=pi.skills;
  right.append(skills);


}
