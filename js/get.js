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
open.onsuccess=function(e)
{
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
var info=store.getAll();
info.onsuccess=function(data)
{
  console.log(data.target.result);
  display(data.target.result);
}

var parent=document.querySelector(".parent");
function display(d)
{
  for(var i=0;i<d.length;i++)
  {
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/instagram.svg";
    image.alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name;
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="View Profile";
    child.append(image);
    child.append(name);
    child.append(link)
    parent.append(child);
  }
}
}
