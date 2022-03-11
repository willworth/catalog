import express from 'express';
import mysql from "mysql"
import chalk from 'chalk';



const port = 3000
const log = console.log;

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodemysql'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();






app.get('/', (req, res) => {
    res.send('Hello World! from catalog')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

