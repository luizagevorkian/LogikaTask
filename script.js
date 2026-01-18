const price = 100; 

const button = document.querySelector('.calc-btn'); 
const input = document.querySelector('#qty'); 
const resultField = document.querySelector('.result'); 

button.addEventListener('click', () => { 
  const quantity = Number(input.value); 

  if (quantity < 0 || isNaN(quantity)) { 
    resultField.innerText = 'Кількість не може бути менше 0!';
  } else {
    const total = price * quantity; 
    resultField.innerText = 'До сплати: ' + total + ' грн';
  }
});
/*querySelector('calc-btn')

Потрібно використовувати селектор за класом .calc-btn або за id #calc-btn.

'calc-btn' шукає тег <calc-btn>, якого немає.

querySelector(.result)

Рядки в JavaScript завжди беруться в лапки. Має бути '.result'.

addEventListener('click', { ... })

Другий аргумент має бути функція, а не об’єкт. Потрібно ( ) => { ... }.

const quantity = input;

input — це елемент, а не його значення. Потрібно input.value.

І треба перетворити в число: Number(input.value).

Незакритий рядок

'Кількість не може бути менше 0!; має закриватися лапками: 'Кількість не може бути менше 0!'.

Обчислення total

price + quantity буде рядок, якщо quantity не число. Потрібно спочатку перетворити quantity на число.

innerHtml

Правильно пишеться innerHTML або можна використовувати innerText. */
