var totalGen = 19;
var totalMW = 0;
var genPower = 0; 
//odds = off, even = on

for (totalGen = 1; totalGen <= 19; totalGen++) {
	if (totalGen % 2 === 0 && totalGen <= 4) {
		totalMW = totalMW + 62;
		console.log("Generator #" + totalGen + " is on, adding 62 MW, for a total of "+ totalMW + " MW.")
		
		
		} else if ( totalGen % 2 === 0 && totalGen <= 19) { 
			totalMW = totalMW + 124;
			console.log("Generator #" + totalGen + " is on, adding 124 MW, for a total of " + totalMW + " MW.")
			
			} else	 {
				console.log("Generator #" + totalGen + " is off.")
			}
}




//Generator #1 is off.
//Generator #2 is on, adding 62 MW, for a total of 62 MW!