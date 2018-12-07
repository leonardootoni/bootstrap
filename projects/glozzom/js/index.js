//JS for index.html

//configure slider <<carousel>>
$(".carousel").carousel({
    interval: 6000,
    pause: "hover"
});

//It stops the youtube player after to close (hide) the Modal.
$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#youtube-video-iframe").attr("src", $("#youtube-video-iframe").attr("src"));
});

//Sets the iframe with a video id provided in #link-video-player
$(document).ready(() => {
    const link = $("#link-video-player").attr("data-video");
    const iframe = $("#youtube-video-iframe").attr("src", link);
});

//Lightbox init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Blocks the form submit action
$("#submit-form-button").click(function (event) {
    event.preventDefault();
});