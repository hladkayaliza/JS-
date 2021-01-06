(() => {
    function showClock() {
        const date = new Date();
        console.log(date.getHours() +':'+ date.getMinutes()+':'+ date.getSeconds());
    }

    setInterval(showClock(), 5000);

    console.log('-----------------------------------------------');
})();




(() => {
    const array = [10, 2, 33, 1, 33, 4, 9, 22, 10];

    function sortArray(array) {
        return array
            .reduce((com, item) => !com.includes(item) ? [...com,item]: com, [])
            .sort((a, b) => a-b);
    }

    console.log(array)
    console.log(sortArray(array))
    console.log('-----------------------------------------------');
})();

// 1 - Написать скрипт для суммирования чисел в массиве
// Прим. есть массив чисел
// const numbers = [10, 25, 100];
// На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135), скрипт должен игнорировал другие типы данных.

(() => {
    function sumArray(array) {

        return array.reduce((sum, item) => typeof(item) === "number" ? sum + item : sum,
            0)

    }
    console.log(sumArray([10, 2, 33, 1, 33, 4, 9, 22, 10]))
    console.log(sumArray([10, 2, 33,'c', 1,'bfr', 33, 4, 9, 22, 10]))
    console.log('-----------------------------------------------');
})();


// 3 - Создать массив объектов, data = [{ firstName: 'Ashton', lastName: 'Kutcher', age: 40}, ... ]; ( от 5 и более значений ).
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя; Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert, если совпадения не произошло вывести alert с ошибкой:  “No results found for your request”
// Поиск производится без учета регистра.
(() => {
    const users = [
        {name: 'Ivan', age: 18},
        {name: 'Petr', age: 58},
        {name: 'Sidor', age: 10},
        {name: 'Jon', age: 25},
        {name: 'Val', age: 32},
        {name: 'Nik', age: 48},
        {name: 'Jack', age: 13},
        {name: 'Bill', age: 8},
    ];

    const controlAge = 18;

    function sortUsers(array) {
        const oldMan = [];
        const jungMan =[];
        array.forEach(item => {
            if (item.age >= controlAge) {
                oldMan.push(item);
            } else { jungMan.push(item); }
        });

        return { jungMan, oldMan }
    }

    function searchUsers(array) {
        const searchItem = prompt("Enter your name", name);
        const filteredArray = array.filter(item => item.name.toLowerCase() === searchItem.toLowerCase());

        if (filteredArray.length) {
            filteredArray.forEach(item => {
                alert(`${item.name} ${item.age}`);
            });
        } else {
            alert("Error!");
        }
    }

    console.log(sortUsers(users));
    searchUsers(users);
    console.log('-----------------------------------------------');
})();


(() => {
    function checkPalindromeSecond(str) {
        let result = false;
        while (str.length) {
            if (str[0] === str[str.length - 1]) {
                str = str.slice(1,-1);
                result = true;
            }
            else {
                result = false;
                break;
            }
        }

        return result;
    }

    console.log(checkPalindromeSecond('abcdefghjklmnoprstsrponmlkjhgfedcba'));
    console.log(checkPalindromeSecond('somemeninterpretninememos'));
    console.log(checkPalindromeSecond('abcdsjhdjdjdhsjda'));
    console.log('-----------------------------------------------');
})();



// 4 - Есть исходный массив строк ['a', 'b', 'c'], данные могут повторятся, нужно собрать объект, у которого свойства будут состоять из строк, а значения этих свойств будет количество повторений в массиве.
//     Пример: ['a', 'b', 'c', 'a', 'v', 'v', 'v'] => { a: 2, b: 1, c: 1, v: 3}
(() => {
    const array = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];

    function makeArray(array) {
        return array.reduce((res,item) => {
            if (res[item]) {
                console.log(res[item]);
                res[item]+=1;
            } else {
                res[item] = 1;
            }
            return res;
        }, {})
    }

    console.log(makeArray(array));
    console.log('-----------------------------------------------');

})();


// 5  - Нужно реализовать функции получения значения из объекта. Входные параметры функции ( объект, строка пути )
// const obj = {
//     a: {
//         b: {
//             c: 'd'
//         },
//         e: 'f'
//     }
// };
// примеры:
//     getProperty( obj, 'a.b.c' ) -> 'd'
// getProperty( obj, 'a.b' ) -> { c : 'd' }
// getProperty( obj, 'a.x.e' ) -> undefined
(() => {
    const obj = {
        a: {
            b: {
                c: 'd'
            },
            e: 'f'
        }
    };


    function getValueByPath(obj, path) {
        let result;
        let arrayStr = path.split('.');
        let count = 0;

        for (let i = 0; i < arrayStr.length; i++) {
            for (let key in obj) {
                if (arrayStr[i] === key ) {
                    count++;
                    obj = obj[key];
                    result = obj;
                } else {
                    if (count === i) {
                        return undefined;
                    }
                }
            }
        }

        return result;
    }

    console.log('parse path');
    console.log(getValueByPath(obj,'a.b'));
    console.log(getValueByPath(obj,'a.b.c'));
    console.log(getValueByPath(obj,'a.x.e'));
    console.log('-----------------------------------------------');

})();


// 6 - есть массив чисел, нужно реализовать функцию, которая в этом массиве находит 2 максимальных числа
// ( за один проход по массиву )
(() => {
    const array = [15, 4, 7, 89, 654, 14, 25, 6, 7, 0, 1]

    function findMaxElements(arr) {
        return arr
            .sort((a,b) => a-b)
            .slice(-2);
    }

    console.log(findMaxElements(array));
    console.log('-----------------------------------------------');
})();

// 7 - есть массив чисел, нужно реализовать функцию которая вернет промежутки между числами
// пример:
//     const arr = [1, 3, 5, 2, 8, 9, 10, 12];
// getRange( arr ) -> '1-3, 5, 8-10, 12'
(() => {
    const arr = [1, 3, 5, 2, 8, 9, 10, 12];
    let block = [];

    function getRange (array) {
       return array.sort( (a,b) => a-b)
            .reduce((res, item, index) => {
                block.push(item);
                if (!(item + 1 === array[index+1])) {
                    res.push(block)
                    block = [];
                }
                return res;
            }, []);
    };

    console.log(getRange(arr));
    console.log('-----------------------------------------------');

})();


// 9 - const simple = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
// const medium = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// const hard = [1, 2, 3, [4, 'str', 6, [7, 'str', 9]]];
// // arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9];

(() => {
    const simple = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
    const medium = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    const hard = [1, 2, 3, [4, 'str', 6, [7, 'str', 9]]];

    // function flatItem (item) {
    //     if (Array.isArray(item)) {
    //         for (let i = 0; i < item.length; i++) {
    //             return flatItem(item[i]);
    //             // return b;
    //         }
    //     } else {
    //         return  item;
    //     }
    // }
    //
    // function convertToArray(array) {
    //     let result = [];
    //     for (let i = 0; i < array.length; i++) {
    //         result.concat(flatItem(array[i]));
    //     };
    //
    //     return result;
    // };

    function convert(arr) {
        return arr.reduce(function (res, item) {
            return res.concat(Array.isArray(item) ? convert(item) : item);
        }, []);
    }

    console.log(convert(simple));
    console.log(convert(medium));
    console.log(convert(hard));
})();


// 8 - у нас есть рассписание
// const data = [
//     ['A', 'mon', '10'],
//     ['A', 'mon', '10'],
//     ['B', 'wed', '14'],
//     ['C', 'mon', '13'],
//     ['B', 'sut', '14'],
//     ['D', 'mon', '11'],
//     ['A', 'twu', '9'],
//     ['C', 'mon', '10'],
//     ['C', 'fri', '20'],
//     ['D', 'mon', '32'],
//     ['A', 'wed', '5']
// ];
// Первый элемент в массиве - название класса, второй - это день недели и третий время дня
// Нужно реализовать функцию, которая возвращает объект, в котором сгруппированы дни недели,
//     по дням недели сгрупированы классы и время в них
//
// getSchedual( data ) ->
// {
//     mon: { A: [ '10', '10' ], C: [ '13', '10' ], 😧 [ '11', '32' ] },
//     wed: { B: [ '14' ], A: [ '5' ] },
//     sut: { B: [ '14' ] },
//     twu: { A: [ '9' ] },
//     fri: { C: [ '20' ] }
// }
(() => {
})();

