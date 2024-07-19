let inputPari = document.getElementById('selectPari');

inputPari.addEventListener('click', 
    function () {
        console.log('pari')
    }
);

let inputDispari = document.getElementById('selectDispari');

inputDispari.addEventListener('click', 
    function () {
        console.log('dispari')
    }
);



// const numero = parseInt(prompt('inserisci un numero da 1 a 5'));
// console.log('number',numero);

// const numberRandom = Math.floor(Math.random() * 5 ) + 1;
// console.log(numberRandom);

// const sum = numberRandom + numero;
// console.log('sum', sum)
const numero = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('number',numero);

const numberRandom = Math.floor(Math.random() * 5 ) + 1;
console.log(numberRandom);

winner();
function winner() {



    const sum = numberRandom + numero;
    console.log('sum', sum)

    if (sum % 2 == 0) {
        console.log('è pari')
    }
    else {
        console.log('è dispari')
    }
    
}