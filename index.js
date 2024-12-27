const fun = async () => {
    
    console.log("1");


    await new Promise((resolve, reject) => {
        setImmediate(() => {
            resolve("2");
        })
    }).then((result) => {
        console.log(result);
    })


    console.log("3");


    const fun2 = async () => {
        process.nextTick(() => {
            console.log("4");
        });
    }
    fun2();

}


fun();