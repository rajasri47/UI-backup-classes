var productTemplate = Handlebars.compile(document.querySelector("#product_Template").innerHTML);
var product = [
    { "id": 0, "name": "iPhone 6S", 
    "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", 
    "imageUrl": "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/iphone-13-pro-header-9to5mac.jpg?quality=82&strip=all&w=1600", "price": 799 },
    { "id": 1, "name": "iPhone 5S", "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", "imageUrl": "http://www.icentar.me/phone/5s/images/silverbig.png", "price": 349 },
    { "id": 2, "name": "Macbook", "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", "imageUrl": "http://www.icentar.me/mac/macbook/images/pro.jpg", "price": 1499 },
    { "id": 3, "name": "Macbook Air", "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", "imageUrl": "http://www.icentar.me/mac/mbair/images/air.jpg", "price": 999 },
    { "id": 4, "name": "Macbook Air 2013", "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", "imageUrl": "http://www.icentar.me/mac/mbair/images/air.jpg", "price": 599 },
    { "id": 5, "name": "Macbook Air 2012", "description": "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.", "imageUrl": "http://www.icentar.me/mac/mbair/images/air.jpg", "price": 499 }]


var loadProductData = (productData, index) => {
    productData.discountPrice = productData.price - (productData.price * 10) / 100;
    productData.index = index;
    var liTag = document.createElement("li");
    liTag.setAttribute('class', 'block');
    liTag.innerHTML = productTemplate(productData);
    
    document.querySelector("#productContainer").append(liTag);
    var id = '#rating_template_' + index;
    document.querySelector(id).append( getRatingTemplate(productData.rating));
}

var getRatingTemplate = (rating) => {
    var halfStarsCount = 0;
    var disabledStars =  0;
    var fullStarsCount = parseInt(rating);
    if (rating % 1 != 0) {
        halfStarsCount = 1;
    }
    disabledStars = 5 - (fullStarsCount + halfStarsCount);
    
    var divtag = document.createElement("div");
    divtag.setAttribute("class", 'ratingContainer');
    for (var i = 0; i < fullStarsCount; i++) {
        var div1 = document.createElement("div");
        divtag.append(div1);
    }
    if (halfStarsCount) {
        var div2 = document.createElement("div");
        div2.setAttribute("class", 'halfStar')
        divtag.append(div2);
    }
    for (var i = 0 ; i < disabledStars; i++) {
        var div3 = document.createElement("div");
        div3.setAttribute("class", 'disableStar')
        divtag.append(div3);
    }

    return divtag;
}
for (var i = 0; i < product.length; i++) {
    loadProductData(product[i], i);
}
