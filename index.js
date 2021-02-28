const express = require('express');
const cons = require('consolidate');
var helmet = require('helmet');
var session = require('express-session');
const app = express();


app.use(helmet());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'cashbabaRcis',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))
const port = 3000;





// html engine added
app.engine('html', cons.nunjucks);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
// app.use(partials());
// html engine end

var pages = require('./routes/pages');
app.use('/', pages);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))