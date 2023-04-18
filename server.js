import  express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/api/get_site_info', (req, res) => {
    res.json({
        title: "Indrawatie",
        subTitle: "The world greatest restaurant system",
    });
  });