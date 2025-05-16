const express = require('express');
const app = express();
app.use(express.json());

// Ejemplo de endpoint
app.get('/api/ping', (req, res) => {
  res.json({ pong: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`API corriendo en http://localhost:${PORT}`)
);
