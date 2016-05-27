var temperature = function(degrees) {
    if (degrees > 50) {

        console.log("its HOTT in here!?")
        } else { 
            console.log("i can see my BREATH?!")
        }
}

temperature(Math.floor((Math.random() * 100) + 1));   
console.log((Math.floor((Math.random() * 100) + 1)))


var helloGoodBye = function(waving) {
    
    if (waving >= 5) {
        console.log("hello");
    } else {
        console.log("goodbye");
        }

};

helloGoodBye(Math.floor((Math.random() * 10) + 1));
