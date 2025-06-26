const form = document.querySelector('form');
form.addEventListener( 'submit', (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height <= 0 || isNaN(height)) {
        results.innerHTML =  "Invalid height! It must be a positive number.";
    }
    else if (!weight || weight <= 0 || isNaN(weight)) {
        results.innerHTML =  "Invalid weight! It must be a positive number.";
    }
    else{
        let bmi = weight / ((height * height)/10000);
        let category = "";
        if (bmi < 18.6) {
            category = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Range";
        } else {
            category = "Overweight";
        }
        results.innerHTML =  `<pre> BMI: ${bmi.toFixed(2)}, Category: ${category} </pre>`;
        
    }
});