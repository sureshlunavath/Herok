const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist/mobileApp/')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/mobileApp/index.html'));
});
//remove / before dist to deploy

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
