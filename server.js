const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const PORT = process.env.PORT || '9000';

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 }))
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000 }))

require("./middleware/routes")(app);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})

