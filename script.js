document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    console.log(curPos);

    document.querySelectorAll('#wrapper>div').forEach((el) => {
        console.log(el.getAttribute('id'));
        el.getAttribute('id');
    });

}
