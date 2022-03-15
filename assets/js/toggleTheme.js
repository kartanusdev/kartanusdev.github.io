/*/ Toggle dark mode theme /*/
const currentThemeStorage = localStorage.getItem('theme');

const toggleThemeBtn = document.querySelector('#togglethemebtn');
const moonSvg = document.querySelector('#darkmode');
const sunSvg = document.querySelector('#lightmode');

/*/ Check if theme storage item exits /*/
if (currentThemeStorage) {
    if (currentThemeStorage === 'dark') {
        moonSvg.style.display = 'none';
        sunSvg.style.display = 'block'

        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        sunSvg.style.display = 'none';
        moonSvg.style.display = 'block'

        document.documentElement.setAttribute('data-theme', 'light');
    }
};

/*/ Function to handle theme adding, removing svg /*/
function handleTheme () {
    const currentThemeAtr = document.documentElement.getAttribute('data-theme');
    if (currentThemeAtr === 'dark'){
        sunSvg.style.display = 'none';
        moonSvg.style.display = 'block';

        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else if (currentThemeAtr === 'light') {
        moonSvg.style.display = 'none';
        sunSvg.style.display = 'block';

        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
};

/*/ Add event listener for toggle Theme /*/
toggleThemeBtn.addEventListener('click', handleTheme);