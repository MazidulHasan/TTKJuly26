function getData(dataId) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve();
            }, 2000);
            
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();