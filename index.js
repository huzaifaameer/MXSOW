const express = require('express')
const puppeteer = require('puppeteer');
var cors = require('cors')
const app = express()
const sowTemplate = require('./sowTemplate.js')
port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())

app.post('/file/sow', (req, res) => {

    (async () => {
        var data = await req.body
        try {
            var supportEmail = ""
            var userEmail = ""
            var packageName = ""
            var terms = ""

            data.supportEmail.map((n) => {
                supportEmail = supportEmail + `<p style="font-size: 12pt;"> ${n} </p>`
            })

            data.userEmail.map((n) => {
                userEmail = userEmail + `<p style="font-size: 12pt;"> ${n} </p>`
            })

            data.packageName.map((n) => {
                packageName = packageName + `<p style="font-size: 12pt;"> ${n} </p>`
            })

            data.terms.map((n) => {
                terms = terms + `<li style='margin: 5px 0px;'> ${n} </li>`
            })

            var date = new Date().toUTCString();

            html = sowTemplate.replace("{{user/company name}}", data.UserName)
                .replace("{{Customer name}}", data.UserName)
                .replace("{{Enter date here}}", date)
                .replace("{{ref# for tracking}}", data.RefNum)
                .replace("{{Service name}}", data.ServiceName)
                .replace("{{Sub-Service name}}", data.SubServiceName.toString().replace(/,/g, ', '))
                .replace("{{Package Name}}", packageName)
                .replace("{{concern department point of contact name}}", supportEmail)
                .replace("{{concern email id}}", userEmail)
                .replace("{{international phone#}}", data.userPhone)
                .replace("{{date and time stamp of user’s service activity}}", date)
                .replace("{{Same date of SOW generation}}", date)
                .replace("{{Terms 1}}", terms)

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(html)
            await page.pdf({ path: data.UserName + '-SOW.pdf' });
            await browser.close();
            await res.status(200).download(`./${data.UserName}-SOW.pdf`)
        }
        catch {
            res.status(404).send("Error While generating the file!")
        }

    })();
})


app.get('/', (req, res) => {
    res.status(200).send(`Service is running on port : ${port}`);
})

app.listen(port, () => {
    console.log(`SOW app listening on port : ${port}`)
})
