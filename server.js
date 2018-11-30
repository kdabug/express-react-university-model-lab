const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

/**
 * TODO write route handelers for:
 * 0. Root Route: GET / (should just send a welcome message a JSON)
 * 1. Student Index: GET /students
 * 2. Student Create: POST /students
 * 3. Student Delete: DELETE /students
 */

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
