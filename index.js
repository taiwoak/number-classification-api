const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000

app.use(cors());

const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

const isArmstrong = (number) => {
    const digits = number.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === number;
};

const isPerfect = (number) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) sum += number / i;
        };
    };
    return number > 1 && sum === number;
};

const getFunFact = async (number) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`)
        return response.data;
    } catch (error) {
        return 'No fun fact available.';
    }
};

app.get('/api/classify-number', async (req, res) => {
    const number = parseInt(req.query.number);

    if (isNaN(number)) {
        return res.status(400).json({ number: req.query.number, error: true});
    };

    const prime = isPrime(number);
    const armstrong = isArmstrong(number);
    const perfect = isPerfect(number);
    const digitSum = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const properties = [armstrong ? 'armstrong': '', number % 2 === 0 ? 'even' : 'odd'].filter(Boolean);
    const funFact = await getFunFact(number);

    res.status(200).json({
        number,
        is_prime: prime,
        is_perfect: perfect,
        properties,
        digit_sum: digitSum,
        fun_fact: funFact
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found', message: 'The requested resource does not exist.'});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});