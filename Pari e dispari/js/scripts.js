// let found = null

// let inputPari = document.getElementById('selectPari');

// inputPari.addEventListener('click', 
//     function () {
//         found = 'pari'
        
//         console.log('found: ', found)
//     }
// );

// let inputDispari = document.getElementById('selectDispari');

// inputDispari.addEventListener('click', 
//     function () {

//         found = 'dispari'
        
//         console.log('found: ', found)
//     }
// );



// const pariDispari = prompt('inserisci un se vuoi Pari o Dispari')

// const numero = parseInt(prompt('inserisci un numero da 1 a 5'));
// console.log('number',numero);


// const numberRandom = Math.floor(Math.random() * 5 ) + 1;
// console.log(numberRandom);


// winner();

// if ( winner() == inputPari)


// let addNumber = document.getElementById("number").value;
// console.log('addNumber', addNumber)

// function winner() {

//     const sum = numberRandom + addNumber;
//     console.log('sum', sum)

//     if (sum % 2 == 0 ) {

//         console.log('è pari')
//     }
//     else {
//         console.log('è dispari')
//     }
    
    
    // if (sum % 2 == 0  || sum % 2 != 0) {

    //     console.log('hai vinto')
    // }
    // else {
    //     console.log('hai perso')
    // }
    
    // console.log('winner found: ',found)
// }

// ..........................................................


let found = null

let inputPari = document.getElementById('selectPari');

inputPari.addEventListener('click', 
    function () {
        found = 'pari'
        
        console.log('found: ', found)
    }
);

let inputDispari = document.getElementById('selectDispari');

inputDispari.addEventListener('click', 
    function () {

        found = 'dispari'
        
        console.log('found: ', found)
    }
);

// const numberRandom = Math.floor(Math.random() * 5 ) + 1;
// console.log(numberRandom , typeof numberRandom);


// winner();


let calcButton = document.getElementById('calc');



let resultValue = document.getElementById('result') 


// let infoForm = document.querySelector('form');

calcButton.addEventListener('click',
    function winner() {
        // event.preventDefault();

        const numberRandom = Math.floor(Math.random() * 5 ) + 1;
        console.log(numberRandom , typeof numberRandom);

        let addNumber = document.getElementById("number");
        
        console.log('addNumber', addNumber.value, typeof addNumber.value);  

        const sum = numberRandom + parseInt(addNumber.value);
        console.log('sum', sum)
        
        if ((sum % 2 == 0 && found == 'pari')  || (sum % 2 != 0 && found == 'dispari')) {
            resultValue.innerHTML = 'HAI VINTO!!!!!!!!!!';
            console.log('hai vinto');
        }
        else {
            resultValue.innerHTML = 'TE PIACEREBBE VINCE!!!!!!!';
            console.log('hai perso');
        }
        
        console.log('winner found: ',found)
    }
)