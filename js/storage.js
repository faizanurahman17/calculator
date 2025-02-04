export function loadSavedState() {
    const savedTheme = localStorage.getItem('theme');
    const savedLockState = localStorage.getItem('lockState');

    switch (savedTheme) {
        case 'Game': applyGameTheme(); break;
        case 'Arcade': applyArcadeTheme(); break;
        case 'Retro': applyRetroTheme(); break;
        case 'Minimalistbw': applyMinimalistbwTheme(); break;
        case 'Neon': applyNeonTheme(); break;
        case 'Cyber': applyCyberTheme(); break;
        case 'Monochrome': applyMonochromeTheme(); break;
        case 'Vibrant': applyVibrantTheme(); break;
        case 'Holo': applyHoloTheme(); break;
        case 'Dune': applyDuneTheme(); break;
        case 'Vaporwave': applyVaporwaveTheme(); break;
    }
}