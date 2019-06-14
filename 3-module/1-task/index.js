/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {

    return data
        .filter(item => item.age <= age)
        .map(item => item.name + ", " + item.balance)
        .join("\n");

   // let acc = "";
    //
    // for (var i = 0; i < data.length; i++) {
    //     if (data[i].age <= age ){
    //         acc = acc +data[i].name + ", " + data[i].balance +"\n";
    //     }
    // }
    // return acc.substring(0,acc.length-1);

}


