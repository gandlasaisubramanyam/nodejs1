const express = require('express');
const app = express();
const fs = require('fs');
const port = 9000;
const path = require('path');

const currentDir= path.join(__dirname, "date-time");
console.log(currentDir);

const time = new Date();
time.getTime()
console.log(time.toString());

fs.writeFile(`${currentDir}/date-time.txt`, `${time.toString()}`, (err) => {
  if (err) {
    console.error(err);
  }else{
    console.log('file written successfully');
  }
})

app.use(express.static(`${currentDir}`));

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, "/date&time/date-time.txt"));
})

app.get('/', (req, res) =>{
res.send('Welcome Sai!');
});

app.listen(port, () => console.log('listening on port ' + port));