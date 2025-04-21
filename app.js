const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


let cars = [];

fs.readFile('./data/cars.json', 'utf8', (err, data) => {
  if (err) throw err;
  cars = JSON.parse(data);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  fs.readFile('./data/cars.json', 'utf8', (err, data) => {
    if (err) throw err;
    const cars = JSON.parse(data);
    res.render('index', { cars });
  });
});

app.get('/about', (req, res) => {
    res.render('partials/about');
  });

  app.get('/contact', (req, res) => {
    res.render('partials/contact');
  });
  
app.get('/google775d111e9c3f0375.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'google775d111e9c3f0375.html'));
});
  
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur lancé sur http://autoshow:${PORT}`);
});

app.get('/car/:id', (req, res) => {
    const carId = parseInt(req.params.id);
  
    fs.readFile('./data/cars.json', 'utf8', (err, data) => {
      if (err) throw err;
      const cars = JSON.parse(data);
      const car = cars.find(c => c.id === carId);
  
      if (car) {
        res.render('car-detail', { car });
      } else {
        res.status(404).send('Voiture non trouvée');
      }
    });
  });

  app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    console.log('📩 Nouveau message reçu :');
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Message :', message);
  
    res.send(`
      <h2>Merci pour votre message, ${name} !</h2>
      <p>Nous vous répondrons bientôt à <strong>${email}</strong>.</p>
      <a href="/">Retour à l'accueil</a>
    `);
  });


