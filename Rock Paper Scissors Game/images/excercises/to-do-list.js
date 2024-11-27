const todoitems = [];
function todolist() {
    const inputElement = document.querySelector('.data');
    const todoName = inputElement.value;

    todoitems.push(todoName);

    console.log(todoitems);
    
    inputElement.value = '';
}

// const b = 2
// let k = 1;

// while (k<=12){
//     console.log(`${b} x ${k} = ${b*k}`);
//     k++;
// }


// function multiplication(num1, num2){
//     for( let k = 1; k<=num2; k++){
//         console.log(`${num1} x ${k} = ${num1*k}`);
    
//     };

// }

// multiplication(5, 12);



// function multiplicationTable(num1, num2){
//     for (let k = 1; k<= num2; k++){
//         console.log(`${num1} x ${k} = ${num1 * k}`);
//     }
// }

// multiplicationTable(6, 12);

// multiplicationTable(4, 12);




