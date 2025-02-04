export function handleTheme() {
  const input = document.querySelector('.input');
  const screen = document.querySelector('.screen');
  const p = document.querySelector('p');
  const ps = document.querySelector('.ps');
  const buttons = document.querySelectorAll('.button');

  if (input.type === 'text' && input.value !== '') {
    let base = document.querySelector('footer.base');

    if (!base) {
      base = document.createElement('footer');
      base.className = 'base';
      base.innerHTML = `
                <h1>THEMES</h1>
                <br>
                <ul class="base-ul">
                    <li>
                        <input type="color" id="color"/>
                        <input type="text" list="select" id="text"/>
                        <datalist id="select">
                            <option>body</option>
                            <option>inputs</option>
                            <option>buttons</option>
                            <option>screen</option>
                        </datalist>
                    </li>
                    <li> GAME </li>
                    <li> ARCADE / GLITER </li> 
                    <li> RETRO / LIGHT NEON </li> 
                    <li> MINIMALIST / BLACK </li>
                    <li> HOLO / FUTURISTIC </li>
                    <li> DUNE / DESERT </li>
                    <li> VAPORWAVE / WAVE </li>
                    <li> GREENERY / NATURE </li>
                    <li> PASTEL DREAM </li>
                    <li> STEAMPUNK / BROWN</li>
                    <li> MONOCHROME </li>
                    <li> CYBER </li>
                    <li> NEON </li>
                    <li> VIBRANT </li>
                    <li> etc ...</li>
                    <br>
                    <li>
                    Type 'off' to remove the existing Theme.
                    <br>
                    Type 'back'/'return' to use calculator.
                    </li>
                </ul>`;
      document.body.appendChild(base);
    } else {
      base.style.display = 'block';
    }
  } else {
    const base = document.querySelector('footer.base');
    if (base) {
      base.remove();
    }
  }
}