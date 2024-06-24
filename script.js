// const boxes = document.querySelectorAll('.bootstrap-box');

// function handleBoxClick(event) {
//     alert(`You clicked on ${event.target.id}!`);
// }

// boxes.forEach(box => {
//     box.addEventListener('click', handleBoxClick);
// });

const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    window.open('http://mywb.me/web', '_blank').focus();
});

navigateTo(url) {
    window.open(url, '_blank').focus();
}