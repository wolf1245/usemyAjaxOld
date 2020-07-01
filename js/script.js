'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    // создаем обьект 
	const request = new XMLHttpRequest();
	
	// создаем запрос
    request.open('GET', 'js/current1.json');
	// указываем http запрос и кодировку
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	// отправляем на сервер
    request.send();

    request.addEventListener('load', () => {
        // проверяем ответ сервера
		if (request.status === 200) {
            // превращаем в обьект
			const data = JSON.parse(request.response);
			// выводим в поле
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            // выводим ошибку если пошло что то не так
			inputUsd.value = "Что-то пошло не так";
        }
    });

});