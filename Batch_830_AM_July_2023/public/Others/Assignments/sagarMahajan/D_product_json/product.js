
let product=[
    {
        Name:"Men Solid Polo Neck Pure Cotton Black T-Shirt",
        price:240,
        Rating:"3.5/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=360&dpr=1.5'
    
    },
    {
        Name:"Men Typography Round Neck Cotton Blend Black T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1655909002_8738951.jpg?format=webp&w=360&dpr=1.5'
    
    },
    {
        Name:"Men Printed, Typography Round Neck Poly Cotton Grey T-Shirt",
        price:299,
        Rating:"5/5",
        image:'https://m.media-amazon.com/images/I/61cysEHrbyL._UY879_.jpg'
    
    },
    {
        Name:"Men Checkered Round Neck Poly Cotton Blue T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1692360079_5699697.jpg?format=webp&w=360&dpr=1.5'
    
    },
   
    {
        Name:"Men Typography Round Neck Cotton Blend Black T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1655909002_8738951.jpg?format=webp&w=360&dpr=1.5'
    
    },
    
    {
        Name:"Men Typography Round Neck Cotton Blend Black T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1655909002_8738951.jpg?format=webp&w=360&dpr=1.5'
    
    },
    {
        Name:"Men Checkered Round Neck Poly Cotton Blue T-Shirt",
        price:299,
        Rating:"5/5",
        image:'https://m.media-amazon.com/images/I/61cysEHrbyL._UY879_.jpg'
    
    },
    {
        Name:"Men Checkered Round Neck Poly Cotton Blue T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1692360079_5699697.jpg?format=webp&w=360&dpr=1.5'
    
    },
   
    {
        Name:"Men Typography Round Neck Cotton Blend Black T-Shirt",
        price:199,
        Rating:"4/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1655909002_8738951.jpg?format=webp&w=360&dpr=1.5'
    
    },
    {
        Name:"Men Solid Polo Neck Pure Cotton Black T-Shirt",
        price:240,
        Rating:"3.5/5",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=360&dpr=1.5'
    
    },
]


let productLoader=(product)=>{

let ol=document.createElement("ol");

var imgTag = document.createElement("img");
imgTag.setAttribute("src", product.image);
ol.append(imgTag);

let li1=document.createElement("li");
li1.innerText= product.Name;
ol.append(li1);
li2=document.createElement("li");
li2.setAttribute("class", "price")
li2.innerText="Price : "+product.price;
ol.append(li2);
li3=document.createElement("li");
li3.innerText="Rating : "+product.Rating
ol.append(li3)
let button=document.createElement("button");
button.innerText="Buy Now"
button.setAttribute("class", 'btn')
ol.append(button);




let box=document.querySelector(".productBox")
box.append(ol);
// let productBoxContainer= document.querySelector(".productContainer").append(box)

}
for (let i=0; i<product.length; i++){
    productLoader(product[i]);
}