const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/math', (req, res) => {
        var result
        var num1 = Number(req.query.num1)
        var num2 = Number(req.query.num2)
        if (req.query.type == 1) {
            result = num1 + num2
        } else if (req.query.type == 2) {
            result = num1 - num2
        } else if (req.query.type == 3) {
            result = num1 * num2
        } else if (req.query.type == 4) {
            result = num1 / num2
        }
        res.send(200, result)
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))