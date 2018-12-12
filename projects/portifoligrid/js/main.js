/*
    Capture all click events on .port-items and if the click happen in the
    same element, it stops the main event
*/
$('.port-item').click(function (e) {

    //gets the element #id clicked
    const target = $(this)[0].getAttribute("data-target");

    //checks if the element is a expanded card
    if ($(target).hasClass("show")) {
        //stop the main event because the card is just opened
        e.stopPropagation();
    } else {
        //gets the element with .show and hide it/*
        $('.collapse').filter(".show").collapse('hide');
    }
});

//Defines an event handler for all elements having the property data-toggle="lightbox"
$(document).on("click", '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});