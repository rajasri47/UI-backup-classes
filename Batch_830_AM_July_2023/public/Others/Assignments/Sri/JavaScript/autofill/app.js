
var Booknames1= [
    "percy jackson",
    "Game of Thrones",
    "Aru Shah",
    "Malgudi Days",
    "Harry Potter",
    "The Unwanteds",
    "geronimo stilton",
    "Hunger Games",
    "One of Us is Lying",
    "Kane Chronicles"

];
var Booknames = [];
   for(var i = 0; i < Booknames1.length; i++)
    {
       Booknames[i] = Booknames1[i].toLowerCase();
    }
    //console.log(Booknames);//

var filterNameData = () => {
    var searchText1 = document.querySelector("#usersearchbar").value;
    var  searchText = searchText1.toLowerCase();
   //console.log(searchText);//

 var filterNameList = [];

     filterNameList = Booknames.filter((Bookname) => {
        var subStr = Bookname.slice(0, searchText.length);
        if(subStr ==  searchText && searchText.length > 0) {
            return Bookname;
        }
    })

      addAutoFill( filterNameList);

} 
var  addAutoFill  = (filterNameList) =>{
  
     document.querySelector(".items").innerHTML = '';

      
        filterNameList.map((Bookname) => {
            var dTag = document.createElement("div");
            dTag.innerText = Bookname;
        
      
        
        dTag.addEventListener("click",(event) => {
        
            var itemText = event.target.innerText;
            document.querySelector("#usersearchbar").value = itemText;
            document.querySelector(".items").innerHTML = '';

        });
        //console.log(filterNameList.length);//
        
        document.querySelector(".items").append(dTag);
    });
    }
    
