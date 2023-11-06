var productTemplate = Handlebars.compile(document.querySelector("#product_Template").innerHTML);

var productList = 
[
    {
        name: 'Laptop',
        price: 2000,
        rating: 3.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'Mobile',
        price: 45000,
        rating: 2.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'TV',
        price: 45000,
        rating: 4.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'Laptop6',
        price: 45000,
        rating: 5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'Laptop',
        price: 45000,
        rating: 1.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'Laptop',
        price: 45000,
        rating: 1.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    }
];

var loadProductData = (productData, index) => {
    productData.discountPrice = productData.price - (productData.price * productData.discountPercent) / 100;
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



for (var i = 0 ; i < productList.length; i++) {
    loadProductData(productList[i], i);
}