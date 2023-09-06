"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const colors = ['skyblue', 'rosybrown', 'rgb(162, 156, 206)', '#f5e1a0', '#cdf5a0', '#a0daf5', '#dab9f8', '#f8b9b9'],
          btnChangeColor = document.querySelector('#changeBtn'),
          btnReset = document.querySelector('#resetBtn'),
          color = document.querySelector(('.change-color__text_code'));

    

    btnChangeColor.addEventListener('click', () => {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
        color.style.color = colors[randomNumber];
    })

    btnReset.addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff';
        color.textContent ='#fff';
        color.style.color = '#fff';
    })

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }
});

