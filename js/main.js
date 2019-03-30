function submitData()
{
  var carrer=document.querySelector("#carrer").value;
  var name=document.querySelector("#name").value;
  var age=document.querySelector("#age").value;
  var gender=document.querySelector("#gender").value;
  var phno=document.querySelector("#phno").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var sbranch=document.querySelector("#sbranch").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;
  var skills=document.querySelector("#skills").value;

  // indexDB implementation

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
    store.put({
      carrer:carrer,
      name:name,
      age:age,
      gender:gender,
      phno:phno,
      email:email,
      address:address,
      education:
          [{
      institute:ginstitute,
      branch:gbranch,
      year:gyear,
      percentage:gpercentage
    },
    {
      institute:iinstitute,
      branch:ibranch,
      year:iyear,
      percentage:spercentage
    },
    {
      institute:sinstitute,
      branch:sbranch,
      year:syear,
      percentage:spercentage
    }
         ],
      skills:skills
    });
  }

window.open("index.html");
}
