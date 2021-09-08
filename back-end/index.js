const express = require('express')
const cors = require('cors');
const port = process.env.PORT || 3000
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// if (!globalThis.fetch) {
// 	globalThis.fetch = fetch;
// }
const app = express()
app.use(cors());
app.options('*', cors());

const motherUrl = "https://data.korona.gov.sk/api" 

// app.get('/regions', function (req, res) {
//   fetch(motherUrl+"/regions").then( res => res.json() ).then(out => res.send(out))
// })

// app.get('/hospital-beds/by-region', function (req, res) {
//     fetch(motherUrl+"https://data.korona.gov.sk/api/regions").then( res => res.json() ).then(out => res.send(out))
// })

/**
 * PROXY FOR DATA ACCESS
 */
app.get('/*', function(req,res){
    //console.dir(req)
    const finalUrl = motherUrl + req.originalUrl
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
 
app.listen(port, () => {
    console.log("Server listening at port",port)
})