// for expand arrow

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const expandArrow = $('.expand-arrow');
const graphList = $('.graph-list');
const contentItems = $$('.menu .content__item');
const dataList = $('.data-menu__list');
const dataListBtn = $('.data-menu__icon');
const imageLinks = $$('.img-show');
const overlayImg = $('.overlay__img');
const overlay = $('.overlay');
const diseaseItems = $$(".graph__item a")
// for data page
function toggleDataMenu(){
    dataList.classList.toggle("data-menu--show");
}
// showing image in overlay
imageLinks.forEach(function(each){
    each.onclick = function(e){
        e.stopPropagation()
        const imgUrl = each.getAttribute("url");
        overlayImg.setAttribute("src", imgUrl)
        overlay.classList.add('overlay--show')
    }
})
overlayImg.onclick = function(e){
    e.stopPropagation();
}
window.addEventListener('click', function(){
    overlay.classList.remove('overlay--show');
})
// show scroll up
function scrollUp(){
    const scrollBtn = document.getElementById('scroll-up');
    if(this.scrollY>=100) scrollBtn.classList.add('scroll--show');
    else scrollBtn.classList.remove('scroll--show');
}
window.addEventListener("scroll", scrollUp);
// for panel
expandArrow.onclick = function(){
    expandArrow.classList.toggle('expand-arrow--down')
    graphList.classList.toggle('graph-list--show')
}
function disappearContent(){
    $$('.content .content__item').forEach(item => {
        item.classList.remove('content--show')
    })
}
contentItems.forEach(function(each){
    each.addEventListener('click', function(){
        disappearContent()
        const element = each.href.split("#", -1)[1];
        $(`.content #${element}`).classList.toggle('content--show');

    })
})

diseaseItems.forEach(each=>{
    each.onclick = ()=>{
        disappearContent();
        $(".content #blog").classList.add('content--show')
    }
})

// FOR DASHBOARD



// FOR BLOG
const blogSwiper = new Swiper('.blog__swiper', {
    // Optional parameters
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});