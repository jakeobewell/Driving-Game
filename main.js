
var $car = document.querySelector('img');
var timer = null;

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

function drive() {
  if ($car.className === 'east') {
    $car.style.left = ($car.x + 4) + 'px';
  }
  if ($car.className === 'west') {
    $car.style.left = ($car.x - 4) + 'px';
  }
  if ($car.className === 'south') {
    $car.style.top = ($car.y + 4) + 'px';
  }
  if ($car.className === 'north') {
    $car.style.top = ($car.y - 4) + 'px';
  }
}

addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    if (timer === null) {
      timer = setInterval(drive, 16);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }
});
