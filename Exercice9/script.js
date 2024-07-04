// votre code ici
const checkAge = (age) => {
    if (age < 18) {
        alert('Vous êtes mineur.')
    } else if (age >= 18 && age < 65) {
        alert('Vous êtes majeur.')
    } else if (age >= 65) {
        alert('Vous êtes senior.')
    }
}

checkAge(15);   
checkAge(30);
checkAge(75)

export default checkAge;
