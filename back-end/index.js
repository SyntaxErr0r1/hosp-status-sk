const express = require('express')
const cors = require('cors');
const port = process.env.PORT || 80
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const compression = require('compression');



// if (!globalThis.fetch) {
// 	globalThis.fetch = fetch;
// }
const app = express()
app.use(cors());
app.options('*', cors());

app.use(compression());

const motherUrl = "https://data.korona.gov.sk" 

// app.get('/regions', function (req, res) {
//   fetch(motherUrl+"/regions").then( res => res.json() ).then(out => res.send(out))
// })

// app.get('/hospital-beds/by-region', function (req, res) {
//     fetch(motherUrl+"https://data.korona.gov.sk/api/regions").then( res => res.json() ).then(out => res.send(out))
// })

/**
 * PROXY FOR DATA ACCESS
 */
app.get('/api/*', function(req,res){
    //console.dir(req)
    const finalUrl = motherUrl + req.originalUrl
    console.log(finalUrl)
    fetch(finalUrl).then( 
        fetchRes => fetchRes.json() 
    ).then(
        out => {
            res.send(out)
            console.log(new Date().toLocaleTimeString(),"Request handled")
        }
    ).catch(
        err => res.status(500).send("Internal proxy error!")
    )
})

app.use('/', express.static('./front-end/dist/'))
 
app.listen(port, () => {
    console.log("Server listening at port",port)
})