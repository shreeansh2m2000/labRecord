const exp = require('express')

const app = exp()
app.get('/', (req, res) => {
    res.download("IOT cybersecurity lab.zip")
})
app.listen(process.env.PORT || 3000, () => {
    console.log("Done")
})