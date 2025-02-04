  document.querySelector('.sum').addEventListener('click', () => {
    const input = Number(document.querySelector('.input').value);
    const screen = document.querySelector('.screen').value;
    const p = document.querySelector('p');
    const ps = document.querySelector('.ps');
    const numbers = screen.split(',').map(Number);
    const add = numbers.map(num => input + num);
    p.textContent = add.join(',');
    ps.classList.remove('ps');
    ps.classList.add('block');
    console.log(add);
  });

  document.querySelector('.sub').addEventListener('click', () => {
    const input = Number(document.querySelector('.input').value);
    const screen = document.querySelector('.screen').value;
    const p = document.querySelector('p');
    const ps = document.querySelector('.ps');
    const numbers = screen.split(',').map(Number);
    const minus = numbers.map(num => input - num);
    p.textContent = minus.join(',');
    ps.classList.remove('ps');
    ps.classList.add('block');
    console.log(minus);
  });

  document.querySelector('.multiply').addEventListener('click', () => {
    const input = Number(document.querySelector('.input').value);
    const screen = document.querySelector('.screen').value;
    const p = document.querySelector('p');
    const ps = document.querySelector('.ps');
    const numbers = screen.split(',').map(Number);
    const multiply = numbers.map(num => input * num);
    p.textContent = multiply.join(',');
    ps.classList.remove('ps');
    ps.classList.add('block');
    console.log(multiply);
  });

  document.querySelector('.divide').addEventListener('click', () => {
    const input = Number(document.querySelector('.input').value);
    const screen = document.querySelector('.screen').value;
    const p = document.querySelector('p');
    const ps = document.querySelector('.ps');
    const numbers = screen.split(',').map(Number);
    const divide = numbers.map(num => input / num);
    p.textContent = divide.join(',');
    ps.classList.remove('ps');
    ps.classList.add('block');
    console.log(divide);
  });

  document.querySelector('.clr').addEventListener('click', () => {
    const input = document.querySelector('.input');
    const screen = document.querySelector('.screen');
    const p = document.querySelector('p');
    const ps = document.querySelector('.ps');

    let onclr = true;
    // onclr = !onclr;
    if (onclr) {
      input.value = '';
      screen.value = '';
      input.style.background = '#e8e8f9';
      screen.style.background = '#e8e8f9';
      p.textContent = 'Cleared';
      p.style.color = 'red';

      input.focus();
    } else {
      console.log('sorry');
    }
  });
  const btns = document.querySelectorAll('.op');

  btns.forEach((btn) => {
    btn.addEventListener('click', function() {
      const input = document.querySelector('.input');
      const screen = document.querySelector('.screen');
      const p = document.querySelector('p');
      if (input.value === input.value) {
        input.style.background = '';
        screen.style.background = '';
        p.textContent = p.textContent;
        p.style.color = 'skyblue';

        input.focus();
      } else {
        console.log('sorry');
      }
    });
  });

const body = document.querySelector('body');
const div = document.querySelector('.div');
const input = document.querySelector('.input');
const screen = document.querySelector('.screen');
const nav = document.querySelector('nav');
const p = document.querySelector('.p');
const ps = document.querySelector('.ps');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {

input.addEventListener('dblclick', () => {
  let ontap = true;
  ontap = !ontap;
  if (input.value === input.value) {
    changeToTextInput();
  } else {
    changeToNumInput();
  }
});

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


input.addEventListener('keyup', () => {
  if (input.value === 'Return' || input.value === 'Back') {
    infoBar.classList.add('infoBar');
    infoBar.style.display = 'block';
    input.type = 'number';
    p.classList.remove('block');
    screen.classList.remove('block');
    ps.classList.remove('block');
    input.placeholder = 'Enter first number';
    console.log('Input type is number');
  } else if (input.value = input.value) {
    p.textContent = input.value;
    p.classList.remove('blink');
    ps.classList.add('ps');
    ps.classList.remove('block');
    ps.textContent = screen.value;
  } else if (input.value === '') {
    p.textContent = '00';
    ps.textContent = '';
    p.classList.add('blink');
  } else {
    console.log('input issue')
  }
  
if (input.type === 'text') {
  let base = document.querySelector('footer.base');
  
  if (!base) {
    // Create the footer and append it to the body
    const base = document.createElement('footer');
    base.className = 'base';
    base.innerHTML = `
      <h1>THEMES</h1>
      <br>
      <ul class="base-ul">
        <li>
          <input type="color" id="color"/>
          <input type="text" list="select" id="text" placeholder="select background colour"/>
          <datalist id="select">
            <option>body</option>
            <option>div</option>
            <option>input</option>
            <option>buttons</option>
            <option>screen</option>
            <option>p</option>
            <option>ps</option>
            <option>remove <!--<span class="span-remove">(set default)</span>--></option>
          </datalist>
        </li>
        <li class="li"> OFF </li>
        <li class="li"> GAME </li>
        <li class="li"> ARCADE </li> <span> or GLITER </span>
        <li class="li"> RETRO </li> <span> or LIGHT NEON </span>
        <li class="li"> MINIMALIST </li> <span>or BLACK </span>
        <li class="li"> NEON </li>
        <li class="li"> PASTEL DREAM </li>

        <li class="li"> CYBER </li>
        <li class="li"> STEAMPUNK </li> <span> BROWN </span>
        
        
        
        <li class="li"> HOLO </li> <span> FUTURISTIC </span>
        <li class="li"> DUNE </li> <span> DESERT </span>
        <li class="li"> VAPORWAVE </li> <span> WAVE </span>
        <li class="li"> GREENERY </li> <span> NATURE </span>
        <li class="li"> MONOCHROME </li>
        
        <li class="li"> VIBRANT </li>
        <li class="li"> Type ")" to lock & Type ")p" to unlock</li> 
        <br>
        <li>
          Type 'off' to remove the existing Theme.
          <br>
          Type 'back'/'return' to use calculator.
          <br>
          
        </li>
      </ul>`;
    document.body.appendChild(base);
    
    // Add event listeners for the inputs
    const colorInput = document.querySelector('#color');
    const textInput = document.querySelector('#text');
    const listItems = document.querySelectorAll('ul.base-ul li.li');
    
    listItems.forEach(li => {
      li.addEventListener('click',() => {
        input.focus();
        input.value = li.textContent.trim().toLowerCase();
      });
    });
    
    if (colorInput) {
  textInput.addEventListener('input', (event) => {
    const Tvalue = textInput.value.toLowerCase();
    const gradientValue = 'linear-gradient(' + colorInput.value + ', #e8e8e8)';

    if (Tvalue === 'buttons') {
      buttons.forEach(button => {
        button.style.background = gradientValue;
        localStorage.setItem('buttonsBgColor', gradientValue);
      });
    } else if (Tvalue === 'body') {
      body.style.background = gradientValue;
      localStorage.setItem('bodyBgColor', gradientValue);
    } else if (Tvalue === 'div') {
      div.style.background = gradientValue;
      localStorage.setItem('divBgColor', gradientValue);
    } else if (Tvalue === 'input') {
      input.style.background = gradientValue;
      localStorage.setItem('inputBgColor', gradientValue);
    } else if (Tvalue === 'screen') {
      screen.style.background = gradientValue;
      localStorage.setItem('screenBgColor', gradientValue);
    } else if (Tvalue === 'p') {
      p.style.background = gradientValue;
      localStorage.setItem('pBgColor', gradientValue);
    } else if (Tvalue === 'ps') {
      ps.style.background = gradientValue;
      localStorage.setItem('psBgColor', gradientValue);
    } else if (Tvalue === 'remove') {
      setDefaultTheme();
      localStorage.clear(); // Clear all custom background colors
    }

    console.log('Color selected:', event.target.value);
  });

  // Retrieve saved custom styles on page load
  const savedButtonsColor = localStorage.getItem('buttonsBgColor');
  const savedBodyColor = localStorage.getItem('bodyBgColor');
  const savedDivColor = localStorage.getItem('divBgColor');
  const savedInputColor = localStorage.getItem('inputBgColor');
  const savedScreenColor = localStorage.getItem('screenBgColor');
  const savedPColor = localStorage.getItem('pBgColor');
  const savedPsColor = localStorage.getItem('psBgColor');

  // Apply saved colors if they exist
  if (savedButtonsColor) {
    buttons.forEach(button => {
      button.style.background = savedButtonsColor;
    });
  }
  if (savedBodyColor) {
    body.style.background = savedBodyColor;
  }
  if (savedDivColor) {
    div.style.background = savedDivColor;
  }
  if (savedInputColor) {
    input.style.background = savedInputColor;
  }
  if (savedScreenColor) {
    screen.style.background = savedScreenColor;
  }
  if (savedPColor) {
    p.style.background = savedPColor;
  }
  if (savedPsColor) {
    ps.style.background = savedPsColor;
  }
}
    
    if (textInput) {
      textInput.addEventListener('input', (event) => {
        // Handle text input change
        console.log('Text input value:', event.target.value);
      });
    }
  } else {
    base.style.display = 'block';
  }
  } else {
    const base = document.querySelector('footer.base');
    if (base) {
      base.remove(); // Completely remove the footer
    }
  }
}); 
screen.addEventListener('keyup', () => {
  p.textContent = screen.value;
  ps.classList.add('ps');
  p.classList.remove('blink');
  ps.classList.remove('block');
  ps.textContent = input.value;
});

// Retrieve saved states from local storage
const savedTheme = localStorage.getItem('theme');
const savedLockState = localStorage.getItem('lockState');

// Apply saved theme and lock state
// game
if (savedTheme === 'Game') {
  applyGameTheme();
}else if (savedTheme === 'offall') {
  removeGameThemes();
}

// arcade
else if (savedTheme === 'Arcade') {
  applyArcadeTheme();
}else if (savedTheme === 'offall') {
  removeArcadeThemes();
}

// retro
else if (savedTheme === 'Retro') {
  applyRetroTheme();
}else if (savedTheme === 'offall') {
  removeRetroThemes();
}

// minimalistbw
else if (savedTheme === 'Minimalistbw') {
  applyMinimalistbwTheme();
}else if (savedTheme === 'offall') {
  removeMinimalistbwThemes();
}

// neon
else if (savedTheme === 'Neon') {
  applyNeonTheme();
}else if (savedTheme === 'offall') {
  removeNeonThemes();
}

// cyber
else if (savedTheme === 'Cyber') {
  applyCyberTheme();
}else if (savedTheme === 'offall') {
  removeCyberThemes();
}

// monochrome
else if (savedTheme === 'Monochrome') {
  applyMonochromeTheme();
}else if (savedTheme === 'offall') {
  removeMonochromeThemes();
}

// vibrant
else if (savedTheme === 'Vibrant') {
  applyVibrantTheme();
}else if (savedTheme === 'offall') {
  removeVibrantThemes();
}

// holo
else if (savedTheme === 'Holo') {
  applyVibrantTheme();
}else if (savedTheme === 'offall') {
  removeHoloThemes();
}

// dune
else if (savedTheme === 'Dune') {
  applyDuneTheme();
}else if (savedTheme === 'offall') {
  removeDuneThemes();
}

// vaporwave
else if (savedTheme === 'Vaporwave') {
  applyVaporwaveTheme();
}else if (savedTheme === 'offall') {
  removeVaporwaveThemes();
}

// greenery
else if (savedTheme === 'Greenery') {
  applyGreeneryTheme();
}else if (savedTheme === 'offall') {
  removeGreeneryThemes();
}

// pastel
else if (savedTheme === 'Pastel') {
  applyPastelTheme();
}else if (savedTheme === 'offall') {
  removePastelThemes();
}

// steampunk
else if (savedTheme === 'Steampunk') {
  applySteampunkTheme();
}else if (savedTheme === 'offall') {
  removeSteampunkTheme();
}

/*// removeAllThemes();
else if (savedTheme === 'offall') {
  removeAllThemes();
}*/

// lock
else if (savedLockState === 'locked') {
  applyLockState();
} else if (savedLockState === 'unlocked') {
  removeLockState();
}

// Event listener for input event to apply/remove themes and lock state
input.addEventListener('keyup', () => {
  const value = input.value.toLowerCase();
  
  // game
  if (value === 'game') {
    applyGameTheme();
    localStorage.setItem('theme', 'Game');
  } 
  // arcade
  else if (value === 'gliter' || value === 'arcade') {
    applyArcadeTheme();
    localStorage.setItem('theme', 'Arcade');
  } 
  // retro
  else if (value === 'dark neon' || value === 'retro') {
    applyRetroTheme();
    localStorage.setItem('theme', 'Retro');
  }
  // minimalistbw
  else if (value === 'black' || value === 'minimalist') {
    applyMinimalistbwTheme();
    localStorage.setItem('theme', 'Minimalistbw');
  }
  // neon
  else if (value === 'neon') {
    applyNeonTheme();
    localStorage.setItem('theme', 'Neon');
  }
  // cyber
  else if (value === 'cyber') {
    applyCyberTheme();
    localStorage.setItem('theme', 'Cyber');
  }
  // monochrome
  else if (value === 'monochrome') {
    applyMonochromeTheme();
    localStorage.setItem('theme', 'Monochrome');
  }
  // vibrant
  else if (value === 'vibrant') {
    applyVibrantTheme();
    localStorage.setItem('theme', 'Vibrant');
  }
  // holo
  else if (value === 'holo' || value === 'futuristic') {
    applyHoloTheme();
    localStorage.setItem('theme', 'Holo');
  }
  // dune
  else if (value === 'dune' || value === 'desert') {
    applyDuneTheme();
    localStorage.setItem('theme', 'Dune');
  }
  // vaporwave
  else if (value === 'vaporwave' || value === 'wave') {
    applyVaporwaveTheme();
    localStorage.setItem('theme', 'Vaporwave');
  }
  // greenery
  else if (value === 'greenery' || value === 'nature' || value === 'green') {
    applyGreeneryTheme();
    localStorage.setItem('theme', 'Greenery');
  }
  // pastel
  else if (value === 'pastel' || value === 'pink' || value === 'pastel dream') {
    applyPastelTheme();
    localStorage.setItem('theme', 'Pastel');
  }
  // steampunk
  else if (value === 'steampunk' || value === 'brown') {
    applySteampunkTheme();
    localStorage.setItem('theme', 'Steampunk');
  }
  
  // Turn off all themes
  else if (value === 'off') {
    // removeAllThemes();
    removeGameTheme();// ok
    removeArcadeTheme();// ok
    removeRetroTheme();// ok
    removeMinimalistbwTheme();// ok
    removeNeonTheme();// ok
    removeCyberTheme();// ok
    removeMonochromeTheme();// ok
    removeHoloTheme();// ok 
    removeVibrantTheme();// ok
    removeDuneTheme();// ok 
    removeVaporwaveTheme();// ok
    removeGreeneryTheme();//ok
    removePastelTheme();// ok
    removeSteampunkTheme(); // ok
    localStorage.setItem('theme', 'off');
  }
  
  // lock
  let lock = ')';
  let pass = 'p';
  
  if (value === lock) {
    applyLockState();
    input.type = 'password';
    localStorage.setItem('lockState', 'locked');
  } else if (value === lock + pass) {
    input.value = '';
    input.type = 'text';
    removeLockState();
    localStorage.setItem('lockState', 'unlocked');
  }
});

// Function to apply the Game theme
function applyGameTheme() {
  div.classList.remove('div');
  div.classList.add('game-div');
  input.classList.add('game-input');
  screen.classList.add('game-input');
  p.classList.add('game-p');
  button.classList.add('game-button');
}

// Function to remove the Game theme
function removeGameTheme() {
  div.classList.remove('game-div');
  div.classList.add('div');
  input.classList.remove('game-input');
  screen.classList.remove('game-input');
  p.classList.remove('game-p');
  button.classList.remove('game-button');
}

// Function to apply the Arcade theme
function applyArcadeTheme() {
  div.classList.add('arcade-div');
  input.classList.add('arcade-input');
  screen.classList.add('arcade-screen');
  p.classList.add('arcade-p');
  button.classList.add('arcade-button');
}

// Function to remove the Arcade theme
function removeArcadeTheme() {
  div.classList.remove('arcade-div');
  input.classList.remove('arcade-input');
  screen.classList.remove('arcade-screen');
  p.classList.remove('arcade-p');
  button.classList.remove('arcade-button');
}

// Function to apply the Retro theme
function applyRetroTheme() {
  div.classList.add('retro-div');
  input.classList.add('retro-input');
  screen.classList.add('retro-screen');
  p.classList.add('retro-p');
  button.classList.add('retro-button');
}

// Function to remove the Retro theme
function removeRetroTheme() {
  div.classList.remove('retro-div');
  input.classList.remove('retro-input');
  screen.classList.remove('retro-screen');
  p.classList.remove('retro-p');
  button.classList.remove('retro-button');
}

// Function to apply the Minimalistbw theme
function applyMinimalistbwTheme() {
  div.classList.add('minimalistbw-div');
  input.classList.add('minimalistbw-input');
  screen.classList.add('minimalistbw-screen');
  p.classList.add('minimalistbw-p');
  button.classList.add('minimalistbw-button');
}

// Function to remove the Minimalistbw theme
function removeMinimalistbwTheme() {
  div.classList.remove('minimalistbw-div');
  input.classList.remove('minimalistbw-input');
  screen.classList.remove('minimalistbw-screen');
  p.classList.remove('minimalistbw-p');
  button.classList.remove('minimalistbw-button');
}

// Function to apply the Neon theme
function applyNeonTheme() {
  div.classList.add('neon-div');
  input.classList.add('neon-input');
  screen.classList.add('neon-screen');
  p.classList.add('neon-p');
  button.classList.add('neon-button');
}

// Function to remove the Neon theme
function removeNeonTheme() {
  div.classList.remove('neon-div');
  input.classList.remove('neon-input');
  screen.classList.remove('neon-screen');
  p.classList.remove('neon-p');
  button.classList.remove('neon-button');
}

// Function to apply the Cyber theme
function applyCyberTheme() {
  div.classList.add('cyber-div');
  input.classList.add('cyber-input');
  screen.classList.add('cyber-screen');
  p.classList.add('cyber-p');
  button.classList.add('cyber-button');
}

// Function to remove the Cyber theme
function removeCyberTheme() {
  div.classList.remove('cyber-div');
  input.classList.remove('cyber-input');
  screen.classList.remove('cyber-screen');
  p.classList.remove('cyber-p');
  button.classList.remove('cyber-button');
}

// Function to apply the Monochrome theme
function applyMonochromeTheme() {
  div.classList.add('monochrome-div');
  input.classList.add('monochrome-input');
  screen.classList.add('monochrome-screen');
  p.classList.add('monochrome-p');
  button.classList.add('monochrome-button');
}

// Function to remove the Monochrome theme
function removeMonochromeTheme() {
  div.classList.remove('monochrome-div');
  input.classList.remove('monochrome-input');
  screen.classList.remove('monochrome-screen');
  p.classList.remove('monochrome-p');
  button.classList.remove('monochrome-button');
}

// Function to apply the Vibrant theme
function applyVibrantTheme() {
  div.classList.add('vibrant-div');
  input.classList.add('vibrant-input');
  screen.classList.add('vibrant-screen');
  p.classList.add('vibrant-p');
  button.classList.add('vibrant-button');
}

// Function to remove the Vibrant theme
function removeVibrantTheme() {
  div.classList.remove('vibrant-div');
  input.classList.remove('vibrant-input');
  screen.classList.remove('vibrant-screen');
  p.classList.remove('vibrant-p');
  button.classList.remove('vibrant-button');
}

// Function to apply the Holo theme
function applyHoloTheme() {
  div.classList.add('holo-div');
  input.classList.add('holo-input');
  screen.classList.add('holo-screen');
  p.classList.add('holo-p');
  button.classList.add('holo-button');
}

// Function to remove the Holo theme
function removeHoloTheme() {
  div.classList.remove('holo-div');
  input.classList.remove('holo-input');
  screen.classList.remove('holo-screen');
  p.classList.remove('holo-p');
  button.classList.remove('holo-button');
}

// Function to apply the Dune theme
function applyDuneTheme() {
  div.classList.add('dune-div');
  input.classList.add('dune-input');
  screen.classList.add('dune-screen');
  p.classList.add('dune-p');
  button.classList.add('dune-button');
}

// Function to remove the Dune theme
function removeDuneTheme() {
  div.classList.remove('dune-div');
  input.classList.remove('dune-input');
  screen.classList.remove('dune-screen');
  p.classList.remove('dune-p');
  button.classList.remove('dune-button');
}

// Function to apply the Vaporwave theme
function applyVaporwaveTheme() {
  div.classList.add('vaporwave-div');
  input.classList.add('vaporwave-input');
  screen.classList.add('vaporwave-screen');
  p.classList.add('vaporwave-p');
  button.classList.add('vaporwave-button');
}

// Function to remove the Vaporwave theme
function removeVaporwaveTheme() {
  div.classList.remove('vaporwave-div');
  input.classList.remove('vaporwave-input');
  screen.classList.remove('vaporwave-screen');
  p.classList.remove('vaporwave-p');
  button.classList.remove('vaporwave-button');
}

// Function to apply the Greenery theme
function applyGreeneryTheme() {
  div.classList.add('greenery-div');
  input.classList.add('greenery-input');
  screen.classList.add('greenery-screen');
  p.classList.add('greenery-p');
  button.classList.add('greenery-button');
}

// Function to remove the Greenery theme
function removeGreeneryTheme() {
  div.classList.remove('greenery-div');
  input.classList.remove('greenery-input');
  screen.classList.remove('greenery-screen');
  p.classList.remove('greenery-p');
  button.classList.remove('greenery-button');
}

// Function to apply the Pastel Dream theme
function applyPastelTheme() {
  div.classList.add('pastel-div');
  input.classList.add('pastel-input');
  screen.classList.add('pastel-screen');
  p.classList.add('pastel-p');
  button.classList.add('pastel-button');
}

// Function to remove the Pastel Dream theme
function removePastelTheme() {
  div.classList.remove('pastel-div');
  input.classList.remove('pastel-input');
  screen.classList.remove('pastel-screen');
  p.classList.remove('pastel-p');
  button.classList.remove('pastel-button');
}

// Function to apply the Steampunk theme
function applySteampunkTheme() {
  div.classList.add('steampunk-div');
  input.classList.add('steampunk-input');
  screen.classList.add('steampunk-screen');
  p.classList.add('steampunk-p');
  button.classList.add('steampunk-button');
}

// Function to remove the Steampunk theme
function removeSteampunkTheme() {
  div.classList.remove('steampunk-div');
  input.classList.remove('steampunk-input');
  screen.classList.remove('steampunk-screen');
  p.classList.remove('steampunk-p');
  button.classList.remove('steampunk-button');
}


// Function to apply the locked state
function applyLockState() {
  nav.classList.add('nav');
  nav.textContent = '🔒';
}

// Function to remove the locked state
function removeLockState() {
  nav.classList.remove('nav');
}


// Function to Set To Default Theme
function setDefaultTheme() {
  body.style.background = '';
  div.style.background = '';
  input.style.background = '';
  screen.style.background = '';
  p.style.background = '';
  ps.style.background = '';
  buttons.forEach(button => {
    button.style.background = '';
  });
}
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

input.addEventListener('input', (event) => {
  // Handle the input interaction without affecting the theme
  const inputValue = event.target.value;
  console.log('Input changed:', inputValue);
  // Don't modify the theme, it will stay as is
});


// reload btn
const reload = document.createElement('button');
reload.className = 'reload';
reload.textContent = 'Load the your style';

reload.addEventListener('click', () => {
  changeForTextInput();
  
  editing();
  
  
});

function changeForTextInput() {
  infoBar.classList.remove('infoBar');
  infoBar.style.display = 'none';
  reload.classList.remove('reload');
  reload.classList.add('block');
  input.type = 'text';
  input.focus();
  input.placeholder = '';
  ps.classList.remove('ps');
  ps.classList.add('block');
  p.classList.add('block');
  screen.classList.add('block');
  console.log('Input type is text');
}

function editing() {
  // Tab to edit
  input.focus();
  input.value = 'Click Enter to Load the Background';
}

input.addEventListener('keyup', loadBackground);
function loadBackground() {
  if (input.value === 'Click Enter to Load the Background') {
    input.value = '';
    input.style.fontSize = '1rem';
  }
}

input.addEventListener('focus', () => {
  if (input.textContent = 'Click Enter to Load the Background' && input.type == 'text') {
    input.style.fontSize = '1.2rem';
  } else {
    input.style.fontSize = '2rem';
  }
});

document.body.appendChild(reload);


if (input.value = input.value || input.value == '' && input.textInput != 'Click Enter to Load the Background') {
  focusInput();
}

function focusInput() {
  input.focus();
}

// info
const infoBar = document.createElement('button');
infoBar.className = 'infoBar';
infoBar.textContent = 'ℹ️';

const infoContent = document.createElement('div');
infoContent.className = 'infoContent';
infoContent.innerHTML = `
  <h2>Context</h2>
  <ul>
    <li>Double click on first input to add Themes</li>
    <!--<li></li>
    <li></li>-->
  </ul>
`;

let onInfoBarBtn = true;

function infoContentFn() {
  if (onInfoBarBtn) {
    infoBar.innerHTML = '';
    infoBar.appendChild(infoContent);
  } else {
    infoBar.textContent = 'ℹ️';
  }
  onInfoBarBtn = !onInfoBarBtn; // Toggle state
}

infoBar.addEventListener('click', infoContentFn);

document.body.appendChild(infoBar);