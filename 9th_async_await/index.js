function delayFn(time){
    return new Promise ((resolve) => setTimeout(resolve , time));
}

async function delayMessage(name) {
    await delayFn(2000)
    console.log(name);
}

delayMessage("Yuvraj");