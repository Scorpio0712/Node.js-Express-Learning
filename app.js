import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello World! This is my first Express app.');
})

app.listen(port, ()=>{
    debug('Server is running on port: ' + chalk.green(port));
})