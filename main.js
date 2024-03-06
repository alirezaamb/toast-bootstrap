const bottomRightContainer = document.getElementById('bottomRight');
const bottomLeftContainer = document.getElementById('bottomLeft');
const topRightContainer = document.getElementById('topRight');
const topLeftContainer = document.getElementById('topLeft');

const submitButton = document.getElementById('btn-submit');

const selectColor = document.getElementById('select-background-color');
const selectposition = document.getElementById('select-position-of-toast');

const input = document.querySelector('#input-text');

submitButton.addEventListener('click', renderToast);

function changeColor() {
  let color = '';

  switch (selectColor.value) {
    case 'primary':
      color = 'text-bg-primary';
      break;
    case 'info':
      color = 'text-bg-info';
      break;
    case 'secondary':
      color = 'text-bg-secondary';
      break;
    case 'danger':
      color = 'text-bg-danger';
      break;
  }

  return color;
}

function changePosition() {
  let position = '';
  switch (selectposition.value) {
    case 'bottomRight':
      position = 'bottomRight';
      break;
    case 'bottomLeft':
      position = 'bottomLeft';
      break;
    case 'topRight':
      position = 'topRight';
      break;
    case 'topLeft':
      position = 'topLeft';
      break;
  }

  return position;
}

function renderToast(event) {
  event.preventDefault();
  selectColor.addEventListener('change', changeColor);

  const title = input.value;
  const color = changeColor();
  const position = changePosition();

  const parentToast = document.createElement('div');
  parentToast.classList.add('toast', 'fade', 'show', 'p-2');
  parentToast.setAttribute('role', 'alert');
  parentToast.setAttribute('aria-live', 'assertive');
  parentToast.setAttribute('aria-atomic', 'true');

  parentToast.classList.add(color);
  const titleToast = document.createElement('div');
  titleToast.innerText = title;

  const closeToastBtn = document.createElement('button');
  closeToastBtn.className = 'btn-close me-2 m-auto';
  closeToastBtn.setAttribute('aria-label', 'Close');
  closeToastBtn.setAttribute('data-bs-dismiss', 'toast');

  parentToast.append(titleToast, closeToastBtn);

  parentToast.classList.add('d-flex');

  if (position === 'bottomRight') {
    bottomRightContainer.append(parentToast);
  } else if (position === 'bottomLeft') {
    bottomLeftContainer.append(parentToast);
  } else if (position === 'topRight') {
    topRightContainer.append(parentToast);
  } else if (position === 'topLeft') {
    topLeftContainer.append(parentToast);
  }

  setTimeout(() => {
    parentToast.remove();
  }, 3000);
}
