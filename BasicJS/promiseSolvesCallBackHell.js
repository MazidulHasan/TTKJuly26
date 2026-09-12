function getData(dataId, getNextData) {

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
                console.log("data", dataId);
                // if (getNextData) {
                //     getNextData();
                // }
            resolve();
            }, 2000);
            
    })
}

// getData(1, () =>{
//     getData(2, ()=>{
//         getData(3);
//     })
// })

getData(1)
    .then(() => getData(2))
    .then(() => getData(3))