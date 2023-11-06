var bookdetails = {
    bookName : "The Adventures",
    bookPrice : 200,
    bookDiscount : 15,
    publisher : "Team of Spirit",
    AuthorsList : ["John", "Handrick", "Joseph"],

    getAuthors() {
        for(var  i = 0; i < this.AuthorsList.length; i++){
            console.log("The Authors are: " +this.AuthorsList[i]);
        }
    },

    bookDiscountdet() {
        var bookcal = (15 / 100) * this.bookPrice;
        console.log("The Total Book price is: " +bookcal +"$");
    },

    displaydetails() {
        console.log("The bookname is: " +this.bookName);
        console.log("The bookprice is: $" +this.bookPrice);
        console.log("The bookDiscount is: " +this.bookDiscount +"%");
        console.log("The bookpublisher is: " +this.publisher);
        this.getAuthors();
        this.bookDiscountdet();


    },
};

bookdetails.displaydetails();