// Event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap element yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 57
    }, 1200, 'easeInOutExpo');

    e.preventDefault();
});


// Parallax

// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                // eq (equal time)
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 500 * (i + 1));
        });

    }
});