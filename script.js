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

(() => {
    function sumArray(array) {

        return array.reduce((sum, item) => typeof(item) === "number" ? sum + item : sum,
            0)

    }
    console.log(sumArray([10, 2, 33, 1, 33, 4, 9, 22, 10]))
    console.log(sumArray([10, 2, 33,'c', 1,'bfr', 33, 4, 9, 22, 10]))
    console.log('-----------------------------------------------');
})();

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
            if (str.charAt(0) === str.charAt(str.length - 1)) {
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


(() => {
    const array = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];

    function makeArray(array) {
        return array.reduce((res,item) => {
            if (res.hasOwnProperty(item)) {
                console.log(res.hasOwnProperty(item));
                res[item]+=1;
                return res;
            } else {
                res[item] = 1;
                return res;
            }

        }
    , {})
    }

    console.log(makeArray(array));
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

