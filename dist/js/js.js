document.addEventListener('DOMContentLoaded', function(){
    const searchInput = document.getElementById('search__input');
    const searchBtn = document.getElementById('search__btn');
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        searchInput.classList.toggle('search__input_state-active');
    })

    hamburger.addEventListener('click', function(e){
        this.classList.toggle('is-active');
        navList.classList.toggle('nav-list_state-active');
    })

    window.addEventListener('resize', function(e){
        hamburger.classList.remove('is-active');
        navList.classList.remove('nav-list_state-active');
    })

    $(".side-header__arrow-down").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section-about").offset().top
        }, 2000);
    });
})