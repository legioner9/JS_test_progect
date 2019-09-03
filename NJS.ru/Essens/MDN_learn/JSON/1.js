/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
debugger;
// Создаём некоторый объект
let session = {
    'screens': [],
    'state': true
};
session.screens.push({'name': 'экранА', 'width': 450, 'height': 250});
session.screens.push({'name': 'экранБ', 'width': 650, 'height': 350});
session.screens.push({'name': 'экранВ', 'width': 750, 'height': 120});
session.screens.push({'name': 'экранГ', 'width': 250, 'height': 60});
session.screens.push({'name': 'экранД', 'width': 390, 'height': 120});
session.screens.push({'name': 'экранЕ', 'width': 1240, 'height': 650});

// Преобразуем его в строку JSON с помощью метода JSON.stringify(),
// затем сохраняем его в localStorage под именем session
localStorage.setItem('session', JSON.stringify(session));
debugger;
// Пример того, как можно преобразовать строку, полученную с помощью метода
// JSON.stringify() и сохранённую в localStorage обратно в объект
let restoredSession = JSON.parse(localStorage.getItem('session'));

// Переменная restoredSession содержит объект, который был сохранён
// в localStorage
console.log(restoredSession);