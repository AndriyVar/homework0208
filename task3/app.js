'use strict'

const convertNumberToString = function(number) {
    const units = ['', 'Один', 'Два', 'Три', 'Чотири', 'П\'ять', 'Шість', 'Сім', 'Вісім', 'Дев\'ять', 'Десять', 'Одинадцять', 'Дванадцять', 'Тринадцять', 'Чотирнадцять', 'П\'ятнадцять', 'Шістнадцять', 'Сімнадцять', 'Вісімнадцять', 'Дев\'ятнадцять'];    
    const tens = ['', '', 'Двадцять', 'Тридцять', 'Сорок', 'П\'ятдесять', 'Шістдесять', 'Сімдесять', 'Вісімдесять', 'Дев\'яносто'];    

    if (number < 1 || number > 99) {        
        return 'помилка введеного значення. Число повинно бути в межах від 1 до 99'    
    }    

    if (number < 20) {        
        return units[number]    
    } else {        
        const temp1 = number % 10;        
        const temp2 = Math.floor(number / 10);       
        return tens[temp2] + ' ' + units[temp1];    
    }
}

let c = prompt('Введіть число');

console.log(convertNumberToString(c));