// Learning about Objects
//		Homework
//1. 
//
//2. 
//3. 
//4. 

var readline = require("readline");
var gun = {};
gun.name = "uzi"; 
gun.magazineSize = 10;
gun.bulletsInClip = gun.magazineSize;

gun.reload = function() {
	this.bulletsInClip = this.magazineSize;
	console.log(this.bulletsInClip)
};

// 1. Now have it say, bang, bang, bang, click, click, reloaded, bang
// 2. 
// 3. 

gun.shoot = function(pulls) {
	// this.bulletsInClip = this.bulletsInClip - pulls	//my friend commented out this code 
	for (i = 0; i < pulls; i++) {
		if (this.bulletsInClip > 0) {				
			console.log("bang");					
			this.bulletsInClip -= 1;					// And made this
		} else {									
			console.log("click");					
		}
	};

	if (this.bulletsInClip === 0) {
		gun.reload();							
	}
	
	console.log(this.bulletsInClip + " bullets in the clip");			
};

var options = {
	input: process.stdin,
	output: process.stout,
	terminal: false
};

var input = readline.createInterface(options);
input.on('line', function(line) {
	console.log("line input is ", line);
	gun.shoot(line);
});

console.log("hi austin, how many shots do you want me to take?");

