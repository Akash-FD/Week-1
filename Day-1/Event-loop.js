function one(){
    console.log("i am first");
}

function two(){
    setTimeout(() => {
        console.log("i am two");
        
    }, 2000);
}

function three(){
    Promise.resolve().then(() => {
        console.log("Promise Resolved");
    });
}
function four(){
    console.log("i am four");
}   

one()
two()
three()
four()