const express = require('express');
const app = express();
app.use(express.json({ limit: '5mb' })); // תמיכה בתמונות חתימה
app.use(express.static('public'));

let db = []; // בסיס נתונים זמני

app.post('/api/register', (req, res) => {
    db.push(req.body);
    res.status(201).send();
});

app.get('/api/admin/list', (req, res) => {
    res.send(db);
});

app.listen(3000, () => console.log('Server running: http://localhost:3000'));