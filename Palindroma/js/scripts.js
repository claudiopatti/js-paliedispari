
function checkPalindrome(parola) {

    
    const arrayValues = parola.split('');

    
    const reverseArrayValues = arrayValues.reverse();

    
    const reverseParola = reverseArrayValues.join('');

    if(parola == reverseParola) {
        alert('E\' palindromo');
        console.log('E\' palindromo')
    }
    else {
        alert('Non è palindromo');
        console.log('Non è palindromo')
    }
}


const parola = prompt('Inserisci una parola: ');

checkPalindrome(parola);

