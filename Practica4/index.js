const db = require('./config/database');
const express = require('express');
const app = express();
const courses = require('./routes/courses');

// Recibe los bodys como json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.use('/api/courses', courses);

db.authenticate()
.then(() =>{
  console.log("Database connected");
})
.catch((err) => {
  console.log(err);
});


const PORT = 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));