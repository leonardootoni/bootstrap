//get the current year for the copyright
$('#footer-year').text(new Date().getFullYear());

//configure slider <<carousel>>
$(".carousel").carousel({
    interval: 6000,
    pause: "hover"
});

//enable scrollspy for #main-nav
$('body').scrollspy({
    target: '#main-nav'
});

//grabs the #main-nav clicks and put the delay effect used on scrollspy
$("#main-nav a").on("click", function (event) {
    if (this.hash) {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({
                scrollTop: $(hash).offset().top
            },
            1100,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

//It stops the youtube player after to close (hide) the Modal.
$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#youtube-video-iframe").attr("src", $("#youtube-video-iframe").attr("src"));
});

//Start to play a youtube video from a provided id
$("#link-video-player").on("click", function (event) {
    const link = $("#link-video-player").attr("data-video");
    const iframe = $("#youtube-video-iframe").attr("src", link);
});