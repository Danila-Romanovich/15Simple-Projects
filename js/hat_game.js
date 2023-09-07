"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const gamePlace = document.querySelector('.counter-game__game-place'),
          gameHat = gamePlace.querySelectorAll('.counter-game__hat'),
          gameImgItems = gamePlace.querySelectorAll('.counter-game__img'),
          gameItems = gamePlace.querySelectorAll('.counter-game__item'),
          pointCounterTitle = document.querySelector('.counter-game__text_emphasis'),
          gameRound = document.querySelector('.counter-game__title_emphasis');;
          
    let roundCounter = 1,
        bonus = 5,
        pointCounter = 0;
        
    gamePlace.addEventListener('click', (e) => {
        const target = e.target;
        let dollarPosition = getRandomNumber();
        
        if (target && target.classList.contains("counter-game__hat")) {
            gameHat.forEach((item, i) => {
                if (target == item) {
                    hideDollar(dollarPosition);
                    gameItems[i].classList.add('counter-game__item_show');
                    if (i === dollarPosition) {
                        pointCounter += 3;
                    } else {
                        pointCounter -= 5;
                    }
                    pointCounterTitle.textContent = pointCounter;
                    const timeInterval = setTimeout(clearGamePlace, 3000);
                    
                }
            });
        }
    });

    function hideDollar(dollarPosition) {
        gameImgItems.forEach((item, i)=> {
            if (i === dollarPosition) {
                item.innerHTML += '<img src="img/counter/dollar.png" id="pointer"class="counter-game__dollar" alt="">';
            }
        })
    }

    function clearGamePlace(dollarPosition) {
        roundCounter += 1;
        gameRound.textContent = roundCounter;

        gameItems.forEach((item) => {
            if (item.classList.contains('counter-game__item_show')) {
                item.classList.remove('counter-game__item_show');
            }
        })

        document.getElementById('point').remove();

        clearTimeout(timeInterval);
    }
          
    function getRandomNumber() {
        return Math.floor(Math.random() * 3);
    }
});

