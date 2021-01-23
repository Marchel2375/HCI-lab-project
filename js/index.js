// Variables
let eventList = ["1", "2"]; // List of Event (.jpeg name)
let index = 0; // Slider Index

// Add Product Function
function addProducts(name, from, type) {
    let card = $('<a href="#" class= "link-text card-container"></a>');
    card.append('<img src="asset/' + from + '/' + (type + '/' + name) + '.webp" class="icon-card">');
    card.append('<h4 class="card-text">' + name + '</h4>');
    card.append('<h4 class="card-text ">Rp. ' + ((Math.floor(Math.random() * 141) + 10) + '.000') + '</h4>');
    $("#card-contents").append(card);
}

$(document).ready(() => {

    // Updating Event Info
    function updateEventInfo() {
        $("#eventInfoText").html((index + 1) + " out of " + eventList.length);
    }
    updateEventInfo();

    // Slider
    function slideImage(value) {

        // Mechanism
        index += value;
        if (index < 0)
            index = eventList.length - 1;
        else if (index >= eventList.length)
            index = 0;

        // Updating HTML
        $("#eventImg").attr("src", "asset/news/" + eventList[index].toLowerCase() + ".webp");
        $("#eventImg").attr("alt", eventList[index]);
        updateEventInfo();

    }

    // Slider Buttons
    $("#sliderLeft").click(() => slideImage(-1));
    $("#sliderRight").click(() => slideImage(1));

    // Add Cards to Best Selling
    addProducts("SEPHORA COLLECTION Hand Balm", "skincare", "Moisturizer");
    addProducts("ALPHA-H Liquid Gold", "skincare", "Treatments");
    addProducts("MARIO BADESCU Buffering Lotion", "skincare", "Moisturizer");
    addProducts("DR. JART+ New Ceramidin Liquid", "skincare", "Toner");
    addProducts("CAUDALIE Instant Foaming Cleanser", "skincare", "Cleanser");
    addProducts("SEPHORA COLLECTION Lip Scrub", "skincare", "Treatments");
    addProducts("MARIO BADESCU Acne Facial Cleanser", "skincare", "Cleanser");

});