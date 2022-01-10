function logger(log = "Gia tri mac dinh"){
    console.log(log);
}

function show(log, isAlert){
    if(isAlert){
        return alert(log)
    }
    console.log(log)
}

function test(log, type='log'){
    console[type](log)
}

show("Nguyen Kien", true);
test("Kien", 'warn')