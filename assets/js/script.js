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


    const mainContentWrap = document.querySelector('.main-content-wrap');

    // Создаю модальное окно
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .5)
    `;

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal__dialog');
    modalDialog.style = `
    text-align: center;
    max-width: 90%;
    margin: 40px auto
    `;
    modal.append(modalDialog);

    const modalImg = document.createElement('img');
    modalImg.style.maxWidth = "80%";

    modalDialog.append(modalImg);

    mainContentWrap.append(modal);

    modal.addEventListener('click', () => {
        console.log(modal.style.display);
        modal.style.display = "none";
    });

    // Реализую открытие изображений при клике по нему
    mainContentWrap.addEventListener('click', (e) => {
        const mainContentWrapStyle = window.getComputedStyle(mainContentWrap);
        if (e.target && 
            e.target.matches(".open-modal") && 
            +mainContentWrapStyle.width.replace(/\D/g, '') >= 800) {
            // console.log(modal.style.display);
            modalImg.src = e.target.src;
            modal.style.display = "block";
        }
    });
});