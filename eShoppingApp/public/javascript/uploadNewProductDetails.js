var productDetails = {};
var addNewProdcutDetails = () => {
    productDetails.name = $("#productName").val();
    productDetails.price = $("#productPrice").val();
    productDetails.rating = $("#rating").val();
    productDetails.category = $("#productCategory").val();
    productDetails.seller = $("#sellerName").val();
    productDetails.manu = $("#manu").val();
    productDetails.discountPercent = $("#discountPercent").val();

    axios.post("/add/newProductDetails", productDetails).then((response) => {
        console.log(response);
        $(".productSuccess").show();
        resetFields()
    }).catch((error) => {

    })
}

var resetFields = () => {
    $("#productName").val('');
    $("#productPrice").val('');
    $("#rating").val('');
    $("#manu").val('');
    $("#discountPercent").val('');
}

var uploadDetails = () => {

    let uploadfile = $("input[name=prodImage]")[0].files[0] // file from input

    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    axios.post('/upload/resource', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        } 
    }).then((response) => {
        productDetails.image = response.data.file_path;
        productDetails.imageFlip = response.data.file_path;
    })
}

var addImageTwo = () => {

    let uploadfileTwo = $("input[name=prodImage]")[0].files[0] // file from input

    let formData = new FormData();
    formData.append("prodImage", uploadfileTwo);
    formData.append("imageType", "flipImage");


    axios.post('/upload/resource', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'imageType': 'FlipImage'
        } 
    }).then((response) => {
        
        productDetails.imageFlip = response.data.file_path;
    })
}


var setDefaultValues = () => {
    
    $("#sellerName").val(loggedInUserId);
    $(".addNewProductDetailsBlock").show(); // Show this block on load

}

var highlightTab = (className, event) => {
    $(".newsProductDetailsPage a").removeClass('active');
    $(event.target).addClass('active');

    $(".tabContainer").hide();
    $(className).show();

    addListOfProducts();
}

var addListOfProducts = () => {
    axios.get('/get/products/forSeller', {params: {
        seller: loggedInUserId
    }}).then((response) => {
        console.log(response);
        response.data.details.forEach((item, index) => {
            // $("#listproducts_table").append(singleRowtemplate(item));
            var tr = $("<tr/>")
            var td0 = $("<td/>").text(index+1)
            tr.append(td0);
            var td1 = $("<td/>").text(item.name)
            tr.append(td1);
            var td2 = $("<td/>").text(item.price)
            tr.append(td2);
            
            var td4 = $("<td/>").text(item.manu)
            tr.append(td4);
            var td3 = $("<td/>").text(item.discountPercent)
            tr.append(td3);
    
            $("#listproducts_table").append(tr)
        })

    });




    $("#listproducts_table").html("");
    

    


}

