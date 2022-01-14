var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + 'has decided to skip this fight. Goodbye!');
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + 'attacked' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + 'health remaining.'
        );

        if (enemyHealth <=0) {
            window.alert(enemyName + 'has died!');

            playerMoney= playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + 'still has' + enemyHealth + 'health left.');
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + 'attacked' + playerName + '. ' + playerName + 'now has' + 'health remaining.'
        );

        if (playerHealth <=0) {
            window.alert(playerName + 'has died!')
            break;
        } else {
            window.alert(playerName + 'still has' + playerHealth + 'health left');
        }
    }
};

var startGame =function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i=0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
         window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            var pickedEnemyName= enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }

                shop();
            }
        }

        else {
         window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    endGame();

    var shop = function() {
        var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if(playerMoney >= 7){
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    playerHealth= playerHealth +20;
                    playerMoney= playerMoney -7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;
            case "UPGRADE":
            case "upgrade":
                if(playerMoney >=7) {
                    window.alert ("Upgrading player's attack by 6 for 7 dollars.");
                    playerAttack = playerAttack +6;
                    playerMoney = playerMoney -7;
                }
                else {
                    window.alert("You don't have enought money!");
                }
                break;
            case "LEAVE":
            case "leave":
                window.alert ("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
    };

    startGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

fight();