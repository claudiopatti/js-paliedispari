
function checkPalindrome(parola) {

    let parola1 = parola.replaceAll(" ", "");
    console.log(parola1);
    // const arrayValues = parola.replace(' ', '').split('');
    const arrayValues = parola1.split('');
    console.log(arrayValues);
    // split('');

    
    const reverseArrayValues = arrayValues.reverse();
    console.log(reverseArrayValues);

    
    const reverseParola = reverseArrayValues.join('');
    console.log(reverseParola);

    if(parola1 == reverseParola) {
        alert('E\' palindromo');
        console.log('E\' palindromo');
    }
    else {
        alert('Non è palindromo');
        console.log('Non è palindromo');
    }
}


const parola = prompt('Inserisci una parola: ');

checkPalindrome(parola);

