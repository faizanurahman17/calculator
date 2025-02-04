import { handleOperation } from './operations.js';
import { handleClear } from './clear.js';
import { handleTheme } from './theme.js';

// Initialize event listeners
document.querySelector('.sum').addEventListener('click', () => handleOperation('sum'));
document.querySelector('.sub').addEventListener('click', () => handleOperation('sub'));
document.querySelector('.multiply').addEventListener('click', () => handleOperation('multiply'));
document.querySelector('.divide').addEventListener('click', () => handleOperation('divide'));
document.querySelector('.clr').addEventListener('click', handleClear);

// Initialize theme handling
document.querySelector('.input').addEventListener('dblclick', handleTheme);
document.querySelector('.input').addEventListener('keyup', handleTheme);
document.querySelector('.screen').addEventListener('keyup', handleTheme);

// Load saved state
import { loadSavedState } from './storage.js';
loadSavedState();