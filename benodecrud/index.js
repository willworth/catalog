import express from 'express';
import mysql from "mysql2"
import chalk from 'chalk';



const port = 7777
const log = console.log;

// Create connection
const db = mysql.createConnection({
    // host: 'localhost',
    host: '127.0.0.1',
    user: 'root',
    password: 'testpassword',
    database: 'monday'
});

// // Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    log('MySql Connected...');
});

const app = express();


// Create table
    // app.get('/createcountrysettingstable', (req, res) => {
    //     // let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    //     let sql = 'CREATE TABLE `country_settings` (`id` int(11) NOT NULL AUTO_INCREMENT,`lang` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,`price_per_meal` decimal(15, 2) DEFAULT NULL,`price_per_km` decimal(15, 2) DEFAULT NULL,`currency` char(15) COLLATE utf8_unicode_ci DEFAULT NULL,PRIMARY KEY(`id`)) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci';
    //     db.query(sql, (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //         res.send('country settings table created...');
    //     });
    // });




app.get('/', (req, res) => {
    res.send('Hello World! from catalog test app')
})

app.listen(port, () => {
    log(chalk.blue.bgGreen.bold('Example app listening on port:'));
    // console.log(`${port}`)
    log(`${ chalk.black.bgYellow(port) }`);
})


