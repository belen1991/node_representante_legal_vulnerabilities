const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const config = require('./config')

const app = express();
const port = config.PORT;
const mongoURI = config.DB_URL;

app.use(bodyParser.json());
app.use('/', express.static('public'));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, dbname: 'ups' });

const User = require('./model')

app.get('/user', async (req, res) => {
  const email = req.query.email;

    try{
      const objeto = await User.findOne({ email: email });
    
      if (!objeto) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(objeto);
    }
    catch(err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});