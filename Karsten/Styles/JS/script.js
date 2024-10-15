document.querySelector('.trailer-button').addEventListener('click', function () {
    window.scrollTo({
        top: document.querySelector('.hero').offsetTop,
        behavior: 'smooth'
    });
});
