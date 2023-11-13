const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<html>
      <head>
        <title>Werstack</title>
      </head>
      <body style='display: flex; align-items: center; justify-content: center;'>
        <p>crm.werstack</p>
      </body>
    </html>`
  );
}); 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
}) 