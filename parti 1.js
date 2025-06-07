const bear = document.querySelector('.toggle__bear');
bear.style.position = 'absolute';
bear.style.top = '50%';
bear.style.left = '50%';
bear.style.transform = 'translate(-50%, -50%)';
bear.style.zIndex = '2';
bear.style.height = getComputedStyle(document.documentElement).getPropertyValue('--size');
bear.style.width = getComputedStyle(document.documentElement).getPropertyValue('--size');
const bear = document.querySelector('.toggle__bear');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  bear.classList.toggle('active');
});

 