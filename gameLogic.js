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
        console.log(stringName);
        if (stringName === element.name) {
            playerAttack = element.attack
            console.log(element.attack);
            console.log(playerAttack);
        }
    }
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
    let monsterDamage = monsterAttack()
    willAttack(playerAttackRoll, playerDamage, monsterDefenseRoll, monsterName)
}



const monsterAttack = () => {
    let mDamages = []
    mDamages.push(+monsterHp1.textContent)
    mDamages.push(+monsterHp2.textContent)
    mDamages.push(+monsterHp3.textContent)
    return mDamages
}


const willAttack = (playerAttackRoll, playerDamage, monsterDefenseRoll, monsterName) => {
    for (let i = 0; i < monsters.length; i++) {
        const element = monsters[i].children[0].textContent;
        if (element === monsterName.children[0].textContent){
            let j = Number(monsterHpArr[i].textContent)
            let k = j - playerDamage
            monsterHpArr[i].textContent = k
        }
        
    }
}
