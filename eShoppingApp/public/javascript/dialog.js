var closeDialogBoxYes = () => {
    document.querySelector(".dialogContainer").style.display = 'none';
    document.querySelector(".maskBlock").style.display = 'none';
    document.querySelector(".imgTwo").style.display ='none';
    document.querySelector(".addImageTwo").style.display = 'block';
    
}

var closeDialogBoxNo = () => {
    document.querySelector(".dialogContainer").style.display = 'none';
    document.querySelector(".maskBlock").style.display = 'none';
}

var openDialogBox = () => {
    document.querySelector(".maskBlock").style.display = 'block';
    document.querySelector(".dialogContainer").style.display = 'block';
}