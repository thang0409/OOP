const obj = new MoveObj('.img img');

document
    .querySelector('.top-btn')
    .addEventListener('click', () => obj.moveUp());
document
    .querySelector('.down-btn')
    .addEventListener('click', () => obj.moveDown());
document
    .querySelector('.left-btn')
    .addEventListener('click', () => obj.moveLeft());
document
    .querySelector('.right-btn')
    .addEventListener('click', () => obj.moveRight());
