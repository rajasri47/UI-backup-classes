// WAP to work with book details like book name, book price, discount, author list, publisher,
// represent the above data with in an object along with a functionality to show the book details

var bookDetails = {
  bookName: "Sub Concious Mind",
  bookPrice: 20,
  discount: 15,
  authorList: ["Joseph Murphy", "Naveen Sahu"],
  publisher: "Sahu Publisher",

  calculateDiscountedPrice: function () {
    return this.bookPrice * (1 - this.discount / 100);
  },
};

console.log("Book Details:");
console.log("Title:", bookDetails.bookName);
console.log("Authors:");
for (var i = 0; i < bookDetails.authorList.length; i++) {
  console.log(bookDetails.authorList[i]);
}
console.log("Publisher:", bookDetails.publisher);
console.log("Price: $" + bookDetails.bookPrice);
console.log("Discount: " + bookDetails.discount + "%");
console.log("Discounted Price: $" + bookDetails.calculateDiscountedPrice());
