const bishbosh = n => {
    if (n % 12 === 0){
        return "Bish-Bosh";
    } else if (n % 3 === 0){
        return "Bish";
    } else if (n % 4 === 0){
        return "Bosh";
    } else {
        return n;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        // get user input 
        let userInput = document.getElementById('numberInput').value;
        // get result text
        let resultText = document.getElementById('resultText');
        // display user input in the text field
        resultText.value = "Your result is: " + bishbosh(userInput);
    })
})