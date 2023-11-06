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
        name: 'Laptop2',
        price: 45000,
        rating: 2.5,
        discountPercent: 10,
        manu: 'Sony',
        image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
    },
    {
        name: 'Laptop4',
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

       var loadProductData = (productData) => {
                var mainLiTag = document.createElement('li');
                mainLiTag.setAttribute("class", "block");


                var olTag = document.createElement("ol");

                var li1 = document.createElement("li");
                li1.innerText = 'Product Name : '  + productData.name;
                olTag.append(li1);

                var li2 = document.createElement("li");
                li2.innerText = 'Manufacturer : ' + productData.manu;
                olTag.append(li2);

                var li3 = document.createElement("li");
                li3.innerText = 'Product Price : ';
                var span1 = document.createElement("span");
                span1.setAttribute("class", 'aprice');
                span1.innerText = productData.price

                var discountPrice = productData.price - (productData.price * productData.discountPercent) / 100;
                var span2 = document.createElement("span");
                span2.setAttribute("class", 'dprice');
                span2.innerText = discountPrice;
                li3.append(span1);
                li3.append(span2);
                olTag.append(li3);

                var li4 = document.createElement("li");
                var ratingTemplate = getRatingTemplate(productData.rating);
                li4.append(ratingTemplate);

                olTag.append(li4);

                var li5 = document.createElement("li");
                var imgTag = document.createElement("img");
                imgTag.setAttribute("src", productData.image);
                li5.append(imgTag);
                olTag.append(li5);
                
                mainLiTag.append(olTag);

                document.querySelector("#productContainer").append(mainLiTag)
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
                loadProductData(productList[i]);
            }