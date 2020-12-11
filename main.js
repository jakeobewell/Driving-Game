
var $car = document.querySelector('img');

addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'north';
  }
  if (event.key === 'ArrowRight') {
    $car.className = 'east';
  }
  if (event.key === 'ArrowDown') {
    $car.className = 'south';
  }
  if (event.key === 'ArrowLeft') {
    $car.className = 'west';
  }
}
