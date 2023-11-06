var sliderDetails = [
    {
        image: 'https://images4.alphacoders.com/102/1028402.jpg',
        mainTitle: 'My Beast',
        subcontent: ' Awesome drive with this'
    },
    {
        image:'https://wallpapers.com/images/hd/ducati-diavel-2017-4k-bike-8z26remik0t1g5bm.jpg',
        mainTitle: 'Anther Beast',
        subcontent: 'Feel the drive on roads'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14Fju937Lr-w_7DXG6aW2JnSy9doYwoLtfw&usqp=CAU',
        mainTitle: 'The classy',
        subcontent: 'The comfort drive'
    },
    {
        image: 'https://images.hdqwalls.com/wallpapers/custom-unbreakable-bike.jpg',
        mainTitle: 'The Antique',
        subcontent: 'The more unique u feel...'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14Fju937Lr-w_7DXG6aW2JnSy9doYwoLtfw&usqp=CAU',
        mainTitle: 'The classy',
        subcontent: 'The comfort drive'
    }
];

document.addEventListener("DOMContentLoaded", () => {
    var templateContent = document.querySelector(".templateContent").innerHTML;
    var slideItemTemplate = Handlebars.compile(templateContent);

    sliderDetails.forEach((item, index) => {      

        var button = $("<button />").attr("type", "button").attr("aria-current", true).attr("aria-label", 'Slide ' + (index + 1)).attr("data-bs-slide-to", index).attr("data-bs-target", '#carouselExampleCaptions');

        
        

        if (index == 0) {
            item.activeClass = 'active';
            button.attr("class", 'active');
        }
        var templateWithData = slideItemTemplate(item);
        $(".carousel-inner").append(templateWithData);
        $(".carousel-indicators").append(button);
        console.log(button);
    })
})