const express = require('express');
const cons = require('consolidate');
const app = express();
const port = 3000;



var helmet = require('helmet');
app.use(helmet());

// html engine added
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
// html engine end

var pages = require('./routes/pages');
app.use('/', pages);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))