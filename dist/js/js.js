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