const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '짱구',
            'age': 5,
            'address': '떡잎마을',
            'class': '해바라기반',
        },{
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '유리',
            'age': 5,
            'address': '떡잎마을',
            'class': '해바라기반',
         },{
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '치타',
            'age': 7,
            'address': '새싹마을',
            'class': '장미반',
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));