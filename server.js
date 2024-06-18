const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let code = "";

app.post('/clear-request', (req, res) => {
   code = "";
   console.log('Code cleared');
});

app.post('/code', (req, res) => {
   const { luaCode } = req.body;
   if (luaCode) {
      code = luaCode;
      console.log(`Received code: ${code}`);
   }
   res.json({ message: 'Code received successfully' });
});

app.get('/code', (req, res) => {
   res.send(code);
});

app.listen(PORT, () => {
   console.log(`Running on PORT ${PORT}`);
});
