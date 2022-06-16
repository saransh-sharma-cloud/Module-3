window.alert("This is an alert! JavaScript is running!");
function fight() {
    window.alert("The fight has begun!");
    

alert(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}



  }
  

    window.alert("Welcome to Robot Gladiators!");

  


  window.prompt("What is your robot's name?");
  //var playerName = window.prompt("What is your robot's name?");

//   window.prompt("playerDetails");
  var playerName = "Robo";
   var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 10;


   alert("Name:" + playerName + "\n Health:" + playerHealth+ "\nAttack:" + playerAttack + "\nMoney:" + playerMoney);

  


  // window.prompt("What is your enemy name?");
 window.prompt("enemyDetails");
 var enemyNames = "Robo1";
   var enemyHealth = 50;
   var enemyAttack = 12;


  alert("Name:" + enemyNames + "\nHealth:" + enemyHealth + "\nAttack" + enemyAttack);

   var promptFight = window.prompt("Would ypu like to FIGHT or SKIP this battle?")
   
   
  //  var fight1 = function(enemyNames) {

  //   while(enemyHealth > 0 && playerHealth >0){


// if(promptFight ==="fight" || promptFight === "FIGHT") {

  enemyHealth = enemyHealth - playerAttack;
  alert(playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " enemy remaining ");
  

//   if(enemyHealth <=0) {
// window.alert(enemyNames + "has died!");
// break;

//   }
//   else{
//     window.alert(enemyNames + "still has" + enemyHealth + "health left");
//   }
  
var playerHealth = 100;

if (playerHealth > 0) {
  alert("Your player is still alive!");
}
// }
// var playerHealth = 10;

// if (playerHealth === 0) {
//   alert("This will not run.");
// } 
// else {
//   alert("This will run instead.");
// }


fight();









