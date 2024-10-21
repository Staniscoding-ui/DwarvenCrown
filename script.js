let lastScrollTop = 0;
const toc = document.querySelector('.table-of-contents');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        toc.classList.add('hidden');
    } else {
        toc.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});