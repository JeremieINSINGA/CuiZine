$('#navbarText')
.on('show.bs.collapse', function () {
    // do somethingâ€¦
    console.log("open");
    $('body').addClass('nav-open');
})
.on('hidden.bs.collapse', function () {
    $('body').removeClass('nav-open');
});