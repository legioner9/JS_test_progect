/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
//  i
// Если этот флаг есть, то регэксп ищет независимо от регистра, то есть не различает между А и а.
//     g
// Если этот флаг есть, то регэксп ищет все совпадения, иначе – только первое.
//     m
// Многострочный режим.

'i AM glad'.search(/am/i); // 2 poz
'i AM Glad glaD'.match(/gl(ad)/i);
// ["Glad", "ad", index: 5, input: "i AM Glad glaD", groups: undefined]
'i AM Glad glaD'.match(/gl(ad)/ig);
// ["Glad", "glaD"]
'12 34 56'.split(/ /); // [12, 34, 56]
'12-34-56'.split(/-/); // [12, 34, 56]
'12-34-56'.replace( /-/g, ":" )   // 12:34:56

//  Спецсимволы	Действие в строке замены
// $$	Вставляет "$".
//     $&	Вставляет всё найденное совпадение.
//     $`	Вставляет часть строки до совпадения.
//  $'	Вставляет часть строки после совпадения.
//  $*n*	где n -- цифра или двузначное число, обозначает n-ю по счёту скобку,
//  если считать слева-направо.

"Василий Пупкин".replace(/(Василий) (Пупкин)/, '$2, $1');
// Пупкин, Василий
"Василий Пупкин".replace(/Василий Пупкин/, 'Великий $&!');
// Великий Василий Пупкин!

var i = 0;

// заменить каждое вхождение "ой" на результат вызова функции
"ОЙ-Ой-ой".replace(/ой/gi, function() {
    return ++i;
}); // 1-2-3

// str – найденное совпадение,
//     p1, p2, ..., pn – содержимое скобок (если есть),
// offset – позиция, на которой найдено совпадение,
//     s – исходная строка.

function replacer(str, offset, s) {
    col( "Найдено: " + str + " на позиции: " + offset + " в строке: " + s );
    return str.toLowerCase();
}

var result = "ОЙ-Ой-ой".replace(/ой/gi, replacer);
col( 'Результат: ' + result ); // Результат: ой-ой-ой

// Итого, рецепты
//  Методы становятся гораздо понятнее, если разбить их использование по задачам, которые нужны в реальной жизни.
//
//     Для поиска только одного совпадения:
//     Найти позицию первого совпадения – str.search(reg).
//     Найти само совпадение – str.match(reg).
//     Проверить, есть ли хоть одно совпадение – regexp.test(str) или str.search(reg) != -1.
//  Найти совпадение с нужной позиции – regexp.exec(str), начальную позицию поиска задать в regexp.lastIndex.
//     Для поиска всех совпадений:
//     Найти массив совпадений – str.match(reg), с флагом g.
//     Получить все совпадения, с подробной информацией о каждом – regexp.exec(str) с флагом g, в цикле.
//     Для поиска-и-замены:
//  Замена на другую строку или результат функции – str.replace(reg, str|func)
//  Для разбивки строки на части:
//     str.split(str|reg)