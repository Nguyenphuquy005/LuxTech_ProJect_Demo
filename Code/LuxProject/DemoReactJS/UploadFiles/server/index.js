const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(fileUpload())

app.post('/upload', (req, res) => {

    if (req.files === null) {
        return res.status(400).json({ msg: ' No File upload' })
    }
    const file = req.files.file;
    console.log(file);
    file.mv(`D:/Luxtech/Code/LuxProject/DemoReactJS/UploadFiles/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err, '==>');
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `./uploads/${file.name}` })
    })
})

app.listen(5000, () => console.log('start Serser'))