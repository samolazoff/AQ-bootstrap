const arrowUp = document.querySelectorAll('#arrowUp');
const arrowDown = document.querySelectorAll('#arrowDown');
const dropdown = document.querySelectorAll('.block-licenses-item-box-img-big');

arrowDown.forEach((e, index) => {
    e.addEventListener('click', function () {
        arrowUp[index].classList.toggle('d-none');
        arrowDown[index].classList.toggle('d-none');
        dropdown[index].classList.toggle('d-none');
    })
});

arrowUp.forEach((e, index) => {
    e.addEventListener('click', function () {
        arrowUp[index].classList.toggle('d-none');
        arrowDown[index].classList.toggle('d-none');
        dropdown[index].classList.toggle('d-none');
    })
});

console.log(arrowUp, arrowDown, dropdown);
