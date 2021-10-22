// let vs var keyword
function doSomething() {
    for (var i = 0; i < 5; i++)
        console.log(i);
    console.log('finally: ' + i); //here value is 5
}
doSomething();
