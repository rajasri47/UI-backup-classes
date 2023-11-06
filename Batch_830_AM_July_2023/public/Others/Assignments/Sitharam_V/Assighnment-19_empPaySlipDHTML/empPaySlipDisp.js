const searchParams = new URLSearchParams(window.location.search);

document.querySelector("#dname").innerHTML = searchParams.get('sname');
document.querySelector("#dId").innerHTML = searchParams.get('sid');
document.querySelector("#dJobTitle").innerHTML =searchParams.get('sjobTitle');
document.querySelector("#dbasicSal").innerHTML = searchParams.get('sbasicSal');
document.querySelector("#dpf").innerHTML = searchParams.get('spf');
document.querySelector("#dhra").innerHTML = searchParams.get('shra');
document.querySelector("#dtotalSal").innerHTML = searchParams.get('stotalSal');;
document.querySelector("#dtax").innerHTML = searchParams.get('stax'); 