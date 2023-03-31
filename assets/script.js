"use strict";

// const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");

// if (devices.test(navigator.userAgent))
// {
//      alert("Вы используете мобильное устройство (телефон или планшет).")
// }
// else
// {
//      alert("Вы используете ПК.")
// }

const menuItems = document.querySelectorAll('.navbar-item');
const backDropDown = document.querySelector('.back-dropdown');

menuItems.forEach(li => {
    li.addEventListener('mouseenter', () => {
        backDropDown.classList.add('back-dropdown--active');
    });

        li.addEventListener('mouseleave', () => {
            backDropDown.classList.remove('back-dropdown--active');
        });
        });



/*company location - new window*/        
const locationWindow = document.querySelector('#location');
function openLocationWindow() {
    window.open('https://goo.gl/maps/e3MxYRnsVNJySwc18');
}

locationWindow.addEventListener('click', openLocationWindow);

//benefits-card-click

let benefitsCards = document.querySelectorAll('.benefits__item .card');
let benifitsCardsTexts = document.querySelectorAll('.card-body .card-text');
let imgArrowMobile = document.querySelectorAll('.card-img-mobile');

benefitsCards.forEach(el => {
    if (window.innerWidth > 1024) {
        el.addEventListener('mouseenter', (event) => {

                let card = event.currentTarget;
                let cardText = card.querySelector('.card-text');

                benefitsCards.forEach(el => {
                    if (el !== card) {
                        el.classList.remove('card--active');
                    }
                });
                benifitsCardsTexts.forEach(el => {
                    if(el !== cardText) {
                        el.classList.remove('card-text--active');
                    }
                });
            
                cardText.classList.toggle('card-text--active');
                card.classList.toggle('card--active');
            
        });
    }
});

//benefits-cards-mobile
benefitsCards.forEach(el => {
    if (window.innerWidth <= 1024) {
        el.classList.remove('card--active');

        el.addEventListener('click', (event) => {
            let card = event.currentTarget;
            let imgMobile = card.querySelector('.card-img-mobile');
            let cardText = card.querySelector('.card-text');            

            benefitsCards.forEach(el => {
                if (el !== card) {
                    el.classList.remove('card--active_mobile');                    
                }
            });

            benifitsCardsTexts.forEach(el => {
                if(el !== cardText) {
                    el.classList.remove('card-text--active');
                }
            });

            imgArrowMobile.forEach(el => {
                if(el !== imgMobile) {
                    el.classList.remove('card-img-mobile--active');
                }
            });

            cardText.classList.toggle('card-text--active');
            card.classList.toggle('card--active_mobile');
            imgMobile.classList.toggle('card-img-mobile--active');
        });
    }
});

// benefitsCards.forEach(el => {
//     if (window.innerWidth <= 1024) {
//         el.classList.remove('card--active');

//         el.addEventListener('mouseenter', (event) => {
//             let card = event.currentTarget;
//             let imgMobile = card.querySelector('.card-img-mobile');
//             let cardText = card.querySelector('.card-text');            

//             benefitsCards.forEach(el => {
//                 if (el !== card) {
//                     el.classList.remove('card--active_mobile');                    
//                 }
//             });

//             benifitsCardsTexts.forEach(el => {
//                 if(el !== cardText) {
//                     el.classList.remove('card-text--active');
//                 }
//             });

//             imgArrowMobile.forEach(el => {
//                 if(el !== imgMobile) {
//                     el.classList.remove('card-img-mobile--active');
//                 }
//             });

//             cardText.classList.toggle('card-text--active');
//             card.classList.toggle('card--active_mobile');
//             imgMobile.classList.toggle('card-img-mobile--active');
//         });
//     }
// });


//implementation-block-mobile

let implementationParent = document.querySelectorAll('.implementation__item');
let implementationArrow = document.querySelectorAll('.implementation__arrow');
let implementationTextMobile = document.querySelectorAll('.implementation__item-text');
console.log(implementationTextMobile);

implementationArrow.forEach(el => {
    el.addEventListener('click', (event) => {
        implementationParent.forEach(el => {
            let arrow = event.currentTarget;
            let text = arrow.nextElementSibling;
            

            console.log(arrow);
            console.log(text);

            implementationArrow.forEach(el => {
                if (el !== arrow) {
                el.classList.remove('implementation__arrow--active');
                }
            });

            implementationTextMobile.forEach(el => {
                if (el !== text) {
                el.classList.remove('implementation__item-text--active');
                }
            });

            console.log(text);
            arrow.classList.toggle('implementation__arrow--active');
            text.classList.toggle('implementation__item-text--active');
        });
    });
});


/*products_mobile_block */

let productsButtons = document.querySelectorAll('.products__button-block div');
let productsText = document.querySelector('.products__text-block');
let productsBtn = document.querySelector('.products__arrow');
console.log(productsButtons);

if (window.innerWidth <= 1024) {
    productsText.classList.add('hide');
} 

    productsBtn.addEventListener('click', () => {
        productsText.classList.toggle('hide');
        productsBtn.classList.toggle('implementation__arrow--active');
    });


productsButtons.forEach(el => {
    el.addEventListener('click', (event) => {
        let btn = event.currentTarget;

        productsButtons.forEach(el => {
            if (el !== btn) {
                el.classList.remove('active');
            }
        });

        btn.classList.toggle('active');

        if (btn.id === 'service_bus' && btn.classList.contains('active')) {
            productsText.innerHTML = '<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text"><span>Enterprise Service Bus</span> (Корпоративная сервисная шина данных)</p><p class="products__text-block_text">Основной принцип ШИНЫ (ESB) — передача информации между различными приложениями путем передачи данных по любому /«транспорту/». Шина разделяет приложения, организовывая коммуникацию, независящую ни от формы данных, ни от способа их передачи.</p><p class="products__text-block_text">Концепция ШИНЫ появилась благодаря желанию избавиться от программирования транспортного слоя интеграции (т.е. подбирать компоненты для считывания почты, работы с SFTP, поднятия интеграционных сервисов точка-точки), которая со временем становится разрозненной и, как следствие, менее управляемой со сложной системой мониторинга и управления.</p><a href="https://www.cwms3000.ru/esb/">Подробнее...</a>';
        } else if (btn.id === 'accounting' && btn.classList.contains('active')) {
            productsText.innerHTML = '<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text"><span>Интеграция с ЕГАИС</span><br />Система ЕГАИС обеспечивает сплошное отражение информации о движении маркируемой алкогольной продукции от производителя, поставщика или импортера, до момента ее реализации потребителю. В CWMS3000 реализовано долгосрочное хранение данных по отгруженным партиям и акцизным маркам, без ущерба быстродействию, что упрощает приёмку возвратов, обеспечивает контроль принимаемых партий, и исключает приёмку “токсичных” возвратов.</p><p class="products__text-block_text"><span>Интеграция с МДЛП</span><br />При процедуре маркировки может производится агрегация единиц продукции в блоки, короба, паллеты с маркировкой кодами групповой упаковки, например кодами SSCC (SSCC — Serial Shipping Container Code, код, содержащий в себе код организации и уникальный порядковый номер контейнера. Наносится, как правило, в виде одномерного штрихкода кодировки Code128).</p><a href="https://www.cwms3000.ru/esb/">Подробнее...</a>';
        } else if (btn.id === '3pl' && btn.classList.contains('active')) {
            productsText.innerHTML = '<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text"><span>3PL</span><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi magni! Labore iure eligendi porro nobis impedit? Eaque recusandae provident cumque. Nemo animi repellendus fugit nesciunt maiores impedit sit in non rerum quia! Modi quibusdam architecto consequatur voluptatem voluptatibus, quasi quis natus ipsum possimus ab in non voluptas quam voluptates quidem, nemo inventore molestias beatae facilis. Officia veniam quisquam porro amet voluptates dolorem, incidunt itaque vel at beatae commodi nostrum, ipsa harum.</p><a href="https://www.cwms3000.ru/products-and-services/processes/"><img src="assets/icon/Arrow.png" alt="arrow-link"></a>';
        } else if (btn.id === 'edo' && btn.classList.contains('active')) {
            productsText.innerHTML = '<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text"><span>Модуль «Электронный документооборот» для электронного подписания документов.</span>При проводке документов (приемка поставок, возвраты, отгрузка и прочее) создается пакет документов в новом модуле «Электронный документооборот», к нему формируется МХ1, МХ3 и другие документы, активируется возможность подписания.Все документы, подписываемые в модуле «Электронный документооборот» от CWMS-3000® или web-сервиса, подписываются электронной подписью с использованием сертифицированных средств криптографической защиты информации.</p><a href="https://www.cwms3000.ru/elektronnyj-dokumentooborot-v-cwms3000/"><img src="assets/icon/Arrow.png" alt="arrow-link"></a>';
        } else if (btn.id === 'cctv' && btn.classList.contains('active')) {
            productsText.innerHTML ='<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text">Интегрирована ли наша система управления складом с какой-либо системой видеонаблюдения? ДА! Дайте нам любую систему, которая будет в браузере по сформированной ссылке открывать нужную камеру(ры) на нужном моменте, мы сформируем в CWMS ссылку и откроем браузер. Системы видеонаблюдения наших клиентов – это от 30 до 150 камер (в отдельной выделенной сети), и стоимость решения стремится в бесконечность. Результатом НИОКР стало собственное решение как для видео-сервера, так и для web-приложения с интегрированным видеонаблюдением. Им вы можете пользоваться как самостоятельно, так и с любой системой, генерирующей события, которые попадают на камеру.</p><a href="https://www.cwms3000.ru/integracziya-cwms3000-s-videonablyudeniem-cctv/"><img src="assets/icon/Arrow.png" alt="arrow-link"></a>';
        } else if (btn.id === 'kiosks' && btn.classList.contains('active')) {
            productsText.innerHTML ='<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text">Гибкое решение для замены или уменьшения ручного труда персонала, уменьшения контакта посетителей с обслуживающим персоналом.Ключевым моментом данного устройства является то, что оно может быть с легкостью интегрировано в уже действующую пропускную и иные системы с обменом в реальном времени по протоколу HTTP API в формате JSON.</p><p class="products__text-block_text">Также можно интегрировать камеру для распознавания лиц сотрудников и/или тепловизор для анализа температуры посетителей, что очень важно в условиях сложной эпидемиологической ситуации.</p><a href="https://www.cwms3000.ru/interfejs-dlya-kioskov/"><img src="assets/icon/Arrow.png" alt="arrow-link"></a>';
        } else if (!btn.classList.contains('active')) {
            productsText.innerHTML = '<h2 class="products__text-block_tittle">ПРОДУКТЫ И УСЛУГИ</h2><p class="products__text-block_text">Наша компания разработала новые гибкие решения для повышения качества производства за счет подключения дополнительных продуктов. Программное обеспечение позволит обеспечить передачу информации между различными приложениями путем передачи данных по любому «транспорту». Реализацию видео-серверов, интегрированных с вашей системой управления. «Электронный документооборот» для электронного подписания документов. Заменить или уменьшить ручной труд персонала, уменьшить контакты посетителей с обслуживающим персоналом и многое другое. </p>';
        }
    });
});


/*poup*/

const callMeBtn = document.querySelector('.callback_me');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const callMeBtnMob = document.querySelector('.header-menu_mobile .callback_me')

let unlock = true;
const timeout = 800;

    callMeBtn.addEventListener('click', function (e) {
        const popup = document.querySelector('#popup');
        popupOpen(popup);
        bodyLock();
    });

    callMeBtnMob.addEventListener('click', function (e) {
        const popup = document.querySelector('#popup');
        popupOpen(popup);
        bodyLock();
    });

function popupOpen(popup) {
    if (popup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
    }
    popup.classList.add('open');
    popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if(doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
    }
}
    body.style.paddingRight = '0px';
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];

        }
        body.classList.remove('lock');
    }, timeout);
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

/**/

const scrollArrow = document.querySelector('.to_scroll');
const benefitsBlock = document.querySelector('#benefits');
function scrollMainBlock() {
    benefitsBlock.scrollIntoView({
        behavior: 'smooth'
    });
}

scrollArrow.addEventListener('click', scrollMainBlock);

const hambIcon = document.querySelector('.hamb_icon');
const menuWrapper = document.querySelector('.wrapper_nav-mobile');
const menuBody = document.querySelector('.menu_body');
const mobileBtn = document.querySelector('.header-menu_mobile .callback_me');

if (hambIcon) {
    const menuBody = document.querySelector('.menu_body');
    hambIcon.addEventListener('click', function (e) {
        body.classList.toggle('lock');
        hambIcon.classList.toggle('hamb--active');
        menuBody.classList.toggle('menu_body--active');
        menuWrapper.classList.toggle('_active');
        mobileBtn.classList.toggle('hide');
    })
}