const path = require('path');
const express = require('express');
const bird_router = require('./routers/bird_router');
const image_router = require('./routers/image_router');
require("dotenv").config();

// TODO: connect to a database
const mongoose = require("mongoose");
const user = process.env.COMPASS_USER;
const pass = process.env.COMPASS_PASSWORD;
// const db_url = `mongodb+srv://${user}:${pass}@cluster0.v5m7qs7.mongodb.net/birds`
const db_url = `mongodb+srv://${user}:${pass}@cluster0.v5m7qs7.mongodb.net/?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(db_url, options).then(() => {
    console.log('successfully connected!')
}).catch((e) => {
    console.error(e, 'could not connect!')
});


/* create Express app */
const app = express();

/* setup Express middleware */
// Pug for SSR (static site rendering)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// TODO: middleware for parsing POST body
// TODO: middleware for uploading files

/* host static resources (.css, .js, ...) */
app.use('/images/', image_router);
app.use('/', express.static(path.resolve(__dirname, 'public/')));

/* redirect root route `/` to `/birds/` */
app.get('/', (req, res) => {
    res.redirect('/birds/');
});

app.use('/birds/', bird_router);


// TODO: 404 page



/* start the server */
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is live http://localhost:${PORT}`);
});
