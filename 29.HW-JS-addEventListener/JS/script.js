"strict use";

// 1) Создайте в HTML документе кнопку, и создайте событие клика(3 разными способами), по клику на кнопку в консоль выводить фразу по вашему усмотрению
const vasa = document.querySelector('.subscribe-button');

vasa.addEventListener("click", function(e) {
    e.preventDefault()
    console.log('Нажми же!');
    console.log(e)
});
vasa.addEventListener("mousedown", function(e) {
    e.preventDefault()
    console.log('Уже нажали?!');
    console.log(e)
});

vasa.onclick = (e) => {
    e.preventDefault()
    console.log('Нажми меня! ')

}



// 2) Создать еще одну кнопку.Повесить на нее слушатель события на двойное нажатие.Вывести запись в консоль

const petya = document.querySelector('.trolley-button');

petya.addEventListener("dblclick", function(e) {
    e.preventDefault()
    console.log('Клик!');
})



// 3) Создать поле в котором будет событие наведение мыши и вывод координат в консоль
const nikol = document.querySelector('.subscribe-box');

nikol.addEventListener("mousemove", function(ev) {
    console.log(ev.pageX);
    console.log(ev.pageY);
})



// 4) Создать событие скролла и вывод координат в консоль

window.addEventListener("scroll", function() {
    console.log(window.scrollY);
    console.log(window.scrollX);

})