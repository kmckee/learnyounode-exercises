const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3004));
app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views`);
app.engine('jsx',
  require('express-react-views').createEngine({ transformViews: false })
);

require('babel/register')({
  ignore: false,
  stage: 0,
});

app.use('/', (req, res) => {
  res.render('index', '');
});

app.listen(app.get('port'), () => {});
