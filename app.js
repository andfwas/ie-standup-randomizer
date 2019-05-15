const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'hbs');

const team = require('./data/team');

const port = 3000;

app.get('/', (req, res) => {
  
  team.random(team.team)
  console.log('Get: Success');
  res.render('team', {
    team: team.team
  });
})

app.get('/random', (req, res) => {
  team.random(team.team)
  console.log('Random Get: Success');
  res.render('team', {
    team: team.team
  });
})

app.listen(port, (req, res) => {
  console.log('App listening on localhost:' + port);
});
