var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
console.log(enemyNames[i]);
console.log(i);
console.log(enemyNames[i] + "is at" + i + "index"); 

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if(promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + "has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            if (confirmSkip) {
            window.alert(playerName+ "has decided to skip this fight. Goodbye!");
            playerMoney= playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + 'attacked' + enemyName + ' .' + enemyName + 'now has' + 'health remaining.'
        );

        if(enemyHealth <=0) {
            window.alert(enemyName + " has died!");
            playerMoney= playerMoney +20
            break;
        } else{
            window.alert(enemyName + "still has" + enemyHealth + "health left.");
        }
        
    playerHealth = playerHealth - enemyAttack;
    console.log(
         enemyName + "attacked" + playerName + ". " + playerName + " now has" + playerHealth + "health remaining.");
    
         if (playerHealth <= 0) {
             window.alert(playerName + 'has died!');
             break;
         } else {
             window.alert(playerName + 'still has' + playerHealth + 'health left.');
         }
    };
    for (var i=0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i+1));
            var pickedEnemyName = enemyNames[i]
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }