const dataSource = {
    protocol: "http",
    host: "localhost:3000",
}

class DataLoader {
    static getBedsSlovakia(){
        var promise = new Promise((resolve, reject) => {
            fetch(
                `${dataSource.protocol}://${dataSource.host}/hospital-beds/in-slovakia?updated_since=2021-09-05%2012%3A34%3A56`
            )
            .then(res => res.json()).then(hospitalBedsSK => {
                var hospBedsSKNowUpdated = hospitalBedsSK.page[0]; 
                resolve(hospBedsSKNowUpdated)
            }).catch(err => {
                reject(err)
            });
        })
        return promise
    }
}

export default DataLoader