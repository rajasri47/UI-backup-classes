var productList = [];

var singleProductTemplate;


fetch("templates/singleProductDetails.htm")           
    .then(response => response.text())
    .then(data => {
        singleProductTemplate = Handlebars.compile(data);
    }); 

var loadProductsToPage = (category) => {
    axios.get("/get/productDetails", {params: {
        categoryType: category
    }}).then((responseData) => {
        $(".productDetailsList").html('');
        productList = responseData.data.details;
        console.log("productList")
        console.log(productList)
        productList.forEach((item, index) => {
            item.dprice = item.price - ((item.price * 10) / 100);
            $(".productDetailsList").append(singleProductTemplate(item));
        })
    });
    
}

var invalidateSession = () => {
    axios.get('/user/logout').then((response) => {
        // Session invalidated
        loadSelectedPage("login");
    })
}