const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const sqlite3 = require('sqlite3').verbose();
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);
const fs = require("fs")


// Conexão com o banco de dados
mongoURI = 'mongodb+srv://busca-receitas-user:BuscaReceitas%40123%21@busca-receitas-cluster.3vfmuec.mongodb.net/busca-receitas-cluster?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("[server.mongoose.connect] - [ mongoDB connected]"))
  .catch((err) => console.log(err));



const dataSql = fs.readFileSync("./database/db.sql").toString();

// Setup the database connection
let db = new sqlite3.Database('mydatabase', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('[server.sqlLite] - [ connected to the in-memory SQLite database]');
});

// Convert the SQL string to array so that you can run them one at a time.
// You can split the strings using the query delimiter i.e. `;` in // my case I used `);` because some data in the queries had `;`.
const dataArr = dataSql.toString().split(');');
// db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
db.serialize(() => {
  // db.run runs your SQL query against the DB
  db.run('PRAGMA foreign_keys=OFF;');
  db.run('BEGIN TRANSACTION;');
  // Loop through the `dataArr` and db.run each query
  dataArr.forEach((query) => {
    if(query) {
      // Add the delimiter back to each query before you run them
      // In my case the it was `);`
      query += ');';
      db.run(query, (err) => {
         if(err) throw err;
      });
    }
  });
  db.run('COMMIT;');
});

// db.serialize(() => {
//   db.each(`SELECT *
//            FROM items`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row);
//   });
// });

// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });


// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

const port = 3000;
const appVersion = "v1";
const startDate = new Date();


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => {
  console.log(
    `[server.listen]  - [ application it's running: ${port} | Version: ${appVersion} | Since: ${startDate} ]`
  );
});

