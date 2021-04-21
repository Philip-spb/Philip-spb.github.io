'use strict';

function setDarkTheme() {
    const cssFile = document.querySelector('[rel="stylesheet"]');
    cssFile.setAttribute('href', '/assets/css/just-the-docs-dark.css');
    localStorage.setItem('darkTheme', true);
}

function setLightTheme() {
    const cssFile = document.querySelector('[rel="stylesheet"]');
    cssFile.setAttribute('href', '/assets/css/just-the-docs-light.css');
    localStorage.removeItem('darkTheme');
}

window.addEventListener('DOMContentLoaded', () => {
    let darkTheme = localStorage.getItem('darkTheme');
    if (darkTheme) {
        setDarkTheme();
    }
    const siteTitle = document.querySelector('.site-title');
    siteTitle.addEventListener('click', (e) => {
        e.preventDefault();
        if (darkTheme) {
            setLightTheme();
            darkTheme = false;
        } else {
            setDarkTheme();
            darkTheme = true;  
        }
    });
    const searchField = document.querySelector('.search-input');
    searchField.placeholder = 'Поиск...';
});