const express = require('express');
const cors = require('cors');
require('dotenv').config();
 

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('REST API Running ✅');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

