var closeDialogBox = () => {
    document.querySelector(".dialogContainer").style.display = 'none';
    document.querySelector(".maskBlock").style.display = 'none';
}

var openDialogBox = () => {
    document.querySelector(".maskBlock").style.display = 'block';
    document.querySelector(".dialogContainer").style.display = 'block';
}