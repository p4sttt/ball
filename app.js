let player = document.createElement(`div`);
player.className = `player`;

const cell = document.querySelector(`.cell`)
cell.append(player);
// console.log(player)

const playerOnCell = document.querySelector(`.player`);
const playerPosition = playerOnCell.parentElement;
let __positionX = parseInt(playerPosition.getAttribute(`positionX`));
let __positionY = parseInt(playerPosition.getAttribute(`positionY`));
console.log(__positionX, __positionY)

function moveUp() {
    if (__positionY !== 3) {
        __positionY += 1;
        return renderingOfMovement()
    }
}
function moveDown() {
    if(__positionY !== 1){
        __positionY -= 1;
        return renderingOfMovement()
    }
}
function moveRight() {
    if(__positionX !== 3){
        __positionX += 1;
        return renderingOfMovement()
    }
}
function moveLeft() {
    if(__positionX !== 1){
        __positionX -= 1;
        return renderingOfMovement()
    }
}

function renderingOfMovement() {
    document.querySelector(`.player`).remove()
    const cell = document.querySelectorAll(`.cell`)
    cell.forEach(cell => {
        const positionXAttribute = cell.getAttribute(`positionX`);
        const positionYAttribute = cell.getAttribute(`positionY`);
        if (positionXAttribute == __positionX && positionYAttribute == __positionY) {
                cell.append(player)
        }
    })
}

document.addEventListener(`keydown`, event => {
    if(event.key === `ArrowUp`){
        moveUp()
    }else if(event.key === `ArrowDown`){
        moveDown()
    }else if(event.key === `ArrowRight`){
        moveRight()
    }else if(event.key === `ArrowLeft`){
        moveLeft()
    }else{}
})


