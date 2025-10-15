import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public/')));

app.set("views", "./src/views/");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index', {username: 'Ankit', customers: ['Homa', 'john', 'Doe']});
})

app.listen(PORT, ()=>{
    debug('Server is running on port: ' + chalk.green(PORT));
})