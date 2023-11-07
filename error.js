const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const resultMessage = document.getElementById('result');


form.addEventListener('submit', (e) => {
    e.preventDefault();


    try {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            throw new Error('Invalid email address');
        }


        resultMessage.textContent = 'Success! Email is valid.';
        resultMessage.style.color = 'green';
    } catch (error) {
        resultMessage.textContent = error.message;
        resultMessage.style.color = 'red';
    }
});


const fruits = ['apple', 'banana', 'cherry'];


fruits.push('orange');


fruits.pop();


const fruitsList = document.getElementById('fruitsList');
fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    fruitsList.appendChild(li);
});


const str = 'Hello, World!';
const substr = str.substring(0, 5);


const stringResult = document.getElementById('stringResult');
stringResult.textContent = `Substring: ${substr}`;


const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();


const dateResult = document.getElementById('dateResult');
dateResult.textContent = `Current Date: ${year}-${month}-${day}`;