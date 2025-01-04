const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate-bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        res.send(`
            <h1>Your BMI is ${bmi.toFixed(2)}</h1>
            <p>Category: <span style="color:${getColor(category)}">${category}</span></p>
            <a href="/">Back</a>
        `);
    } else {
        res.send(`
            <h1>Invalid input!</h1>
            <a href="/">Back</a>
        `);
    }
});

function getColor(category) {
    switch (category) {
        case 'Underweight': return 'blue';
        case 'Normal weight': return 'green';
        case 'Overweight': return 'yellow';
        case 'Obese': return 'red';
        default: return 'black';
    }
}
