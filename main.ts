// ---- Завдання 1 ------------
// let city: string;
// city = "Київ";
// city = "Львів";
// let address: string = city;
// console.log(address);

// -----------Завдання 2  --------------
// let inp: any = prompt('Введіть число');
// let num: number = parseInt(inp);

// if (num === 0) {
//     console.log('Число дорівнює нулю');
// }
// else if (num % 2 > 0) {
//     console.log('Число НЕпарне');
// }
// else if (num % 2 === 0) {
//     console.log('Число парне');
// }

// ---- Завдання 3 ---------------------

// function maxNum(...nums: number[]): number {
//     let maxNum: number = nums[0];
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] < nums[i + 1]) {
//             maxNum = nums[i+1]
//         }
//     }
//     return maxNum;
// }

// ------- Завдання 4 --------------------

// function getSqrt(num: any): any {
//     if (num === undefined) {
//         return 'Будь ласка введіть число';
//     }
//     else if (typeof num !== 'number') {
//         return 'Повинно бути числове значення';  
//     }
//     else if (num > 0) {
//         return `Квадратний корінь числа ${num} дорівнює ${Math.sqrt(num)}`;
//     }
//     else if (num < 0) {
//         return `Введіть додатнє число`;
//     }
    
// }
// console.log(getSqrt());
// console.log(getSqrt(4));
// console.log(getSqrt(-4));
// console.log(getSqrt('hjk'));

// ------ Завдання 5 ------------------------------

const badWords = document.querySelector('.badWords') as HTMLSpanElement
const input = document.getElementById('input') as HTMLInputElement;
const btnAdd = document.querySelector('.add') as HTMLButtonElement;
const btnReset = document.querySelector('.reset') as HTMLButtonElement;
const txtArea = document.getElementById('txtArea') as HTMLTextAreaElement;
const cenzor = document.getElementById('cenzor') as HTMLButtonElement;

btnAdd?.addEventListener('click', function () {
    if (input.value === '') {
        input.classList.add('wrongInput')
        input.placeholder = 'Plese write a word!'
    }
    else {
        if (badWords.textContent === '') {
        badWords.textContent += input.value;
        } else if (badWords.textContent !== '') {
            badWords.textContent += ', ' + input.value;
        }
        input.value = '';
    }
})
input.addEventListener('focus', function () {
    input.classList.remove('wrongInput');
    input.placeholder = 'text here...'
    
    txtArea.classList.remove('wrongInput');
    txtArea.placeholder = 'text here...';
})
input.addEventListener('blur', function () {
    input.classList.remove('wrongInput')
})

btnReset?.addEventListener('click', function () {
    if (badWords.textContent) {
        badWords.textContent = '';  
        txtArea.value = '';
    }
})
txtArea.addEventListener('focus', function () {
    txtArea.classList.remove('wrongInput')
    txtArea.placeholder = 'text here...';
})
txtArea.addEventListener('blur', function () {
    console.log('txtArea blured');
    txtArea.classList.remove('wrongInput');
    txtArea.placeholder = 'text here...';
})

cenzor.addEventListener('click', function () {
    if (txtArea.value === '') {
        txtArea.classList.add('wrongInput');
        txtArea.placeholder = 'Please write a text!'
    }
    else if (txtArea.value && badWords.textContent) {
        let arr: string[] = badWords.textContent.split(', ');
        let allText: string = txtArea.value;
        for (let i = 0; i < arr.length; i++){
            let regex = new RegExp(`\\b${arr[i]}\\b`, 'gi');
           allText = allText.replace(regex, '*'.repeat(arr[i].length));
        }
         txtArea.value = allText;
    }
})


















