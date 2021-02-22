let valueForCheck = 'Eve';
console.info(`Значение: "${valueForCheck}" являеться палиндромом: ${palindrome(valueForCheck)}`);

console.info('OK!');


/**
 * @param {String} date
 * @returns {boolean}
 */
/**
 * Все знаки препинания, пробелы, цифры не учитывается.
 * Проверяются только русские и английские буквы
 */
function palindrome (data) {
    data = data.toString().toLowerCase();
    data = data.replace(/[^a-zа-яё]/gi, '');

    if (data === "") return false;

    let len = Math.floor(data.length / 2);
    for (let i = 0; i < len; i++)
        if (data[i] !== data[data.length - i - 1])
            return false;
    return true;
}