import { players } from "./playerCharacter.js";

const monsters = document.getElementsByClassName('monster')
const monsterHp1 = document.getElementById("monster-01-hp")
const monsterHp2 = document.getElementById("monster-02-hp")
const monsterHp3 = document.getElementById("monster-03-hp")

const monsterHpArr = [monsterHp1, monsterHp2, monsterHp3]

const playerAttackValue = (name) => {
    let playerAttack;
    for (let i = 0; i < players.length; i++) {
        const element = players[i];
        const stringName = name.children[0].textContent.toLowerCase()
        if (stringName === element.name) {
            // playerAttack = element.attack
            playerAttack = () =>{
                switch(i){
                    case 0:
                    case 2:
                    case 3:
                        return Math.floor(Math.random() * 15) + 1;
                        break;
                    case 1:
                    case 4:
                        return Math.floor(Math.random() * 8) + 1;
                        break;
                    default: 
                }
            }
        }
    }
    // console.log(name.children);
    return playerAttack
}


const gameDice = () => {
    let var1 =[];
    for (let i = 0; i < 3; i++) {
        var1.push(Math.floor(Math.random()*20))
    }
    return var1
}

export const attackBtn = (playerName, monsterName) => {
    let playerAttackRoll = gameDice()
    let playerDefenseRoll = gameDice()
    let playerDamage = playerAttackValue(playerName)
    let monsterAttackRoll = gameDice()
    let monsterDefenseRoll = gameDice()
    let monsterHP = monsterHPpopulate()
    let monsterDamage = monsterAttackValue(monsterHP)
    const playerHP = document.getElementById(`player-hp`);
    willAttack(playerAttackRoll, playerDamage, monsterDefenseRoll, monsterName)
    willDefend(playerDefenseRoll, monsterAttackRoll, monsterDamage, playerHP);
}

function monsterAttackValue (monsterHP){
    let mAttackArr = [];
    for (let i = 0; i < monsterHP.length; i++) {
        mAttackArr.push(Math.floor(Math.random() * (monsterHP[i] * .5)));   
        //monster HP lowering causes monster damage to lower as well   
    }
    return mAttackArr;
}

const monsterHPpopulate = () => {
    let mHP = []
    mHP.push(+monsterHp1.textContent)
    mHP.push(+monsterHp2.textContent)
    mHP.push(+monsterHp3.textContent)
    return mHP
}


const willAttack = (playerAttackRoll, playerDamage, monsterDefenseRoll, monsterName) => {
    if (playerAttackRoll >= monsterDefenseRoll){
        for (let i = 0; i < monsters.length; i++) {
            const element = monsters[i].children[0].textContent;
            if (element === monsterName.children[0].textContent){
                let j = Number(monsterHpArr[i].textContent)
                let k = j - playerDamage();
                monsterHpArr[i].textContent = k
            }
        }
    }
}

const willDefend = (playerDefenseRoll, monsterAttackRoll, monsterDamage, playerHP) => {

    let HP = Number(playerHP.textContent);

    for (let i = 0; i < monsterAttackRoll.length; i++) {
        if (playerDefenseRoll[i] < monsterAttackRoll[i]){
            playerHP.textContent = HP - monsterDamage[i];
            // console.log("monsterDamage " + monsterDamage[i]);
        }
        // console.log("HP " + HP);
        // console.log("playerHP " + playerHP.textContent);
    }
}