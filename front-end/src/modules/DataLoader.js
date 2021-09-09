const dataSource = {
    protocol: window.location.hostname == "localhost"?"http":"https",
    host: window.location.hostname+"/api",
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
    static getBedsRegions(){
        var promise = new Promise((resolve, reject) => {
            fetch(
                `${dataSource.protocol}://${dataSource.host}/hospital-beds/by-region?updated_since=2021-09-05%2012%3A34%3A56`
            )
            .then(res => res.json()).then(hospitalBedsRegions => {
                var hospBedsRegionsNow = hospitalBedsRegions.page.slice(0,8); 
                fetch(
                    `${dataSource.protocol}://${dataSource.host}/regions/`
                ).then(res => res.json()).then(regionsList => {
                    for(var i = 0; i < hospBedsRegionsNow.length; i++){
                        const region_id = hospBedsRegionsNow[i].region_id
                        const regionInfo = regionsList.find(reg => reg.id == region_id)
                        hospBedsRegionsNow[i].region_info = regionInfo
                    }
                    resolve(hospBedsRegionsNow)
                }).catch(err => {
                    reject("Error while getting list of regions",err)
                })
            }).catch(err => {
                reject("Error while getting regional data",err)
            });
        })
        return promise
    }
}

export default DataLoader