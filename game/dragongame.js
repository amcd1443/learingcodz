// stole the idea from codecademy
var slaying = true;

var playerHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

var theifHit = Math.floor(Math.random() * 4);
var theifDmg = Math.floor(Math.random() * 4);

var warriorHit = Math.floor(Math.random() * 6);
var warriorDmg = Math.floor(Math.random() * 5);

var wizardHit = Math.floor(Math.random() * 2);
var wizardDmg = Math.floor(Math.random() * 7);

while (slaying) {
  if (playerHit) {
    console.log("playerHit % = " + playerHit);
    console.log("you have hit the dragon. You did " + damageThisRound + " damage!");
    totalDamage += damageThisRound
    console.log(totalDamage);
    
    if (totalDamage >= 4) {
      console.log("you did it, you killed the dragon")
      slaying = false;
    } else {
      playerHit = Math.floor(Math.random() * 2);
      console.log("round 2 of playerHit " + playerHit);
    }
  } else {
    console.log("PLAYER HAS DIED")
    slaying = false;
  }

}