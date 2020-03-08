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
        var weight = Number(req.query.weight)
        var type = req.query.mail;
        var mail
        if (type == 0) {
            mail = 'Letters (Stamped)'
            if (weight > 0 && weight <= 1) {
                result = 0.55
            }
            else if (weight > 1 && weight <= 2) {
                result = 0.7
            }
            else if (weight > 2 && weight <= 3) {
                result = 0.85
            }
            else if (weight > 3 && weight <= 3.5) {
                result = 1
            }
        } else if (type == 1) {
            mail = 'Letters (Metered)'
            if (weight > 0 && weight <= 1) {
                result = 0.5
            }
            else if (weight > 1 && weight <= 2) {
                result = 0.65
            }
            else if (weight > 2 && weight <= 3) {
                result = 0.8
            }
            else if (weight > 3 && weight <= 3.5) {
                result = 0.95
            }
        } else if (type == 2) {
            mail = 'Large Envelopes (Flats)'
            var notover = weight - 1
            result = notover * 0.2 + 1
        } else if (type == 3) {
            mail = 'First-Class Package Service—Retail'
            if (weight > 0 && weight <= 4) {
                result = 3.8
            }
            else if (weight > 4 && weight <= 8) {
                result = 4.6
            }
            else if (weight > 8 && weight <= 12) {
                result = 5.3
            }
            else if (weight > 12 && weight <= 13) {
                result = 5.9
            }
        }
        var data = { mail: mail, result: result, weight: weight }
        res.render('result', data)
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))