const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let products = [
    { id: 1, name: 'Apple', price: 2 },
    { id: 2, name: 'Banana', price: 1 },
    { id: 3, name: 'Orange', price: 3 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
