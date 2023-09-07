"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const counterParent = document.querySelector('.main-block__wrapper'),
          counterVal = counterParent.querySelector('.main-block__title'),
          btnWrapper = counterParent.querySelector('.main-block__btn-wrapper'),
          btnReset = document.querySelector('#resetBtn');

    let count = 0;

    counterParent.addEventListener('click', (e) => {
        const target = e.target;
        const element = document.createElement('div');
        element.classList.add('anim__plus');
        if (target.getAttribute('data-btntype')) {
            if (target.dataset.btntype === 'incr') {
                count+=1;
                element.textContent = '+';
                btnWrapper.append(element);
            } else {
                element.classList.add('anim__plus_minus');
                count -=1;
                element.textContent = '-';
                btnWrapper.append(element);
            }
        }
        colorChange(count);
        
    })

    function addAnimElem() {

    }

    function colorChange(count) {
        counterVal.textContent = count;
        if (count > 0) {
            counterVal.style.color = '#a4f7ab';
        } else if (count < 0) {
            counterVal.style.color = '#f07777';
        } else {
            counterVal.style.color = '#292935';
        }
    }

    btnReset.addEventListener('click', () => {
        count = 0;
        colorChange(count);
    })

});

