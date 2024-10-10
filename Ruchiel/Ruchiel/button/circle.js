document.body.addEventListener('click', function(e) {
    const circle = document.createElement('div');
    circle.classList.add('click-circle');

    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 500);
});
