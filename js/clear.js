export function handleClear() {
  const input = document.querySelector('.input');
  const screen = document.querySelector('.screen');
  const p = document.querySelector('p');
  const ps = document.querySelector('.ps');

  input.value = '';
  screen.value = '';
  input.style.background = '#e8e8f9';
  screen.style.background = '#e8e8f9';
  p.textContent = 'Cleared';
  p.style.color = 'red';

  input.focus();
}