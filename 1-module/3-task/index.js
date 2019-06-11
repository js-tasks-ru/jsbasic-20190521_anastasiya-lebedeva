'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {


    let numbers = str.split(/[,\s]/)
        .filter(item => item.length > 0)
        .map(Number)
        .filter(isNumber);

    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

function isNumber(obj) {
    return obj !== undefined && typeof obj=== "number" && !isNaN(obj);
}


