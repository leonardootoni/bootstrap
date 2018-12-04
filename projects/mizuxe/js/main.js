//get the current year for the copyright
$('#year').text(new Date().getFullYear())

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

//Collapse the navbar icon after to click on a menu item
$("#navbarCollapse a").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
});