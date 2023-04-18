import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import * as fs from 'node:fs';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  console.log("Hello")
  res.send('Hello World!');
});



app.get('/api/get_site_info', (req, res) => {
    res.json({
        title: "Indrawatie",
        subTitle: "The world greatest restaurant system",
    });
  });

  let rawdata = fs.readFileSync('db/reservations.json');

  const reservations = JSON.parse(rawdata);

  app.post('/api/reservation', (req, res) =>{
    reservations.push(req.body.reservation);
    console.log("--------NEW RESERVATION");
    fs.writeFile('db/reservations.json', JSON.stringify(reservations, null, 4), err => {
      if (err) {
        console.error(err);
      }
    });

  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});