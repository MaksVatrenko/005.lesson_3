const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Знайти суму та кількість позитивних елементів.
let sum1 = 0;
let count1 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum1 += arr[i];
        count1++
    }
}
const outArr1 = document.getElementById('outArr1');
outArr1.innerHTML = `Сума позитивних елементів: ${sum1}, кількість позитивних елементів: ${count1}`;

// Знайти мінімальний елемент масиву та його порядковий номер.
let min = arr[0];
let indexMin = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
}
const outArr2 = document.getElementById('outArr2');
outArr2.innerHTML = `Мінімальний елемент масиву: ${min}, його порядковий номер: ${indexMin}`;

// Знайти максимальний елемент масиву та його порядковий номер.
let max = arr[0];
let indexMax = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}
const outArr3 = document.getElementById('outArr3');
outArr3.innerHTML = `Максимальний елемент масиву: ${max}, його порядковий номер: ${indexMax}`;

// Визначити кількість негативних елементів.
let count2 = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count2++
    }
}
const outArr4 = document.getElementById('outArr4');
outArr4.innerHTML = `Кількість негативних елементів ${count2}`;

// Знайти кількість непарних позитивних елементів.
let count3 = 0;
let summ2 = 0
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        summ2 += arr[i];
        count3++
    }
}
const outArr5 = document.getElementById('outArr5');
outArr5.innerHTML = `Кількість непарних позитивних елементів ${count3}`;

// Знайти кількість парних позитивних елементів.
let count4 = 0;
let summ3 = 0
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        summ3 += arr[i];
        count4++
    }
}
const outArr6 = document.getElementById('outArr6');
outArr6.innerHTML = `Кількість парних позитивних елементів ${count4}`;

// Знайти суму парних позитивних елементів.
const outArr7 = document.getElementById('outArr7');
outArr7.innerHTML = `Сума парних позитивних елементів ${summ3}`;

// Знайти суму непарних позитивних елементів.
const outArr8 = document.getElementById('outArr8');
outArr8.innerHTML = `Сума непарних позитивних елементів ${summ2}`;

// Знайти добуток позитивних елементів.
let product = 1;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        product *= arr[i]
    }
}
const outArr9 = document.getElementById('outArr9');
outArr9.innerHTML = `Добуток позитивних елементів ${product}`;

// Знайти найбільший серед елементів масиву, остальні обнулити.
arr.map((item, index) => {
    if (item === max) {
        return item
    } else return arr[index] = 0
})
const outArr10 = document.getElementById('outArr10');
outArr10.innerHTML = arr;
