export default function handleFunction() {
  
  const body = document.querySelector('body');
  const div = document.querySelector('.div');
  const input = document.querySelector('.input');
  const screen = document.querySelector('.screen');
  const nav = document.querySelector('nav');
  const p = document.querySelector('.p');
  const ps = document.querySelector('.ps');
  const buttons = document.querySelectorAll('.button');

  
  function changeToTextInput() {
    infoBar.classList.remove('infoBar');
    infoBar.style.display = 'none';
    input.type = 'text';
    input.placeholder = 'Enter Theme Codes to Modify Themes';
    ps.classList.remove('ps');
    ps.classList.add('block');
    p.classList.add('block');
    screen.classList.add('block');
    console.log('Input type is text');
  }
  
  function changeToNumInput() {
    infoBar.classList.add('infoBar');
    infoBar.style.display = 'block';
    input.type = 'number';
    console.log("Input type can't be change to text", input);
    ps.classList.add('ps');
    ps.classList.remove('block');
  }

}