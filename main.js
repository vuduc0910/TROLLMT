const container = document.querySelector(".container");
for (i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add('heart');
    container.appendChild(div);
}
function aniHearts() {
    anime({
        targets: ".heart",
        translateX: () => {
            return anime.random(-1000, 1000);
        },
        translateY: () => {
            return anime.random(-500, 500);
        },
        scale: () => {
            return anime.random(1, 6);
        },
        rotate: 45,
        easing: 'easeInOutBack',
        duration: 2000,
        delay: anime.stagger(10),
        complete: aniHearts
    })
}
aniHearts();


// handle button click
const btnOk = document.getElementById('btn-ok');
btnOk.addEventListener('click', (e) => {
    btnOk.style.top = `${Math.floor(Math.random() * 80 + 10)}%`;
    btnOk.style.left = `${Math.floor(Math.random() * 80 + 10)}%`;
})
const contentLable = document.getElementById('content_lable')
const btnBack = document.getElementById('btn-back');
const body = document.body
btnBack.addEventListener('click', () => {
    contentLable.style.display = 'none';
    container.style.display = 'none';
    body.style.backgroundColor = 'transparent';
    body.style.backgroundImage = `url('./img/troll.jpg')`
    const div = document.createElement("div");
    div.classList.add('result')
    div.innerText = "Đấy biết ngay mà, mày tuổi gì haha!!!"
    body.appendChild(div)
})
