const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
    res.send("Hello Api")
})
app.post('/api-post', (req, res) => {
    res.send('Posting Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
