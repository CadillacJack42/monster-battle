import { monsterArray } from "./monsters.js"
import { populator } from "./populateGmMonsters.js"

const gmAddBtn = document.getElementById('attack')
const characterSelection = document.getElementById(`chooser-id`);
const archer = document.getElementById(`selected-01`);
const barbarian = document.getElementById(`selected-02`);
const warlock = document.getElementById(`selected-03`);
const cleric = document.getElementById(`selected-04`);
const valkyrie = document.getElementById(`selected-05`);
const charPick = document.getElementById(`pick-char-button`);
let lastPick;

const apiUrl = 'https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json'

let fullMonsterArr = await monsterArray(apiUrl)

gmAddBtn.addEventListener('click', () => {
    populator(fullMonsterArr);
})

archer.addEventListener('click', () => {
    if (!lastPick){
        archer.classList.add('is-selected'); 
        picker(archer);
    } else {
        lastPick.classList.remove('is-selected');
        archer.classList.add('is-selected'); 
        picker(archer);
    }
    // console.log(lastPick.children[0].innerText);
});

barbarian.addEventListener('click', () => {
    if (!lastPick){
        barbarian.classList.add('is-selected'); 
        picker(barbarian);
    } else {
        lastPick.classList.remove('is-selected');
        barbarian.classList.add('is-selected'); 
        picker(barbarian);
    }
});

warlock.addEventListener('click', () => {
    if (!lastPick){
        warlock.classList.add('is-selected'); 
        picker(warlock);
    } else {
        lastPick.classList.remove('is-selected');
        warlock.classList.add('is-selected'); 
        picker(warlock);
    }
});

cleric.addEventListener('click', () => {
    if (!lastPick){
        cleric.classList.add('is-selected'); 
        picker(cleric);
    } else {
        lastPick.classList.remove('is-selected');
        cleric.classList.add('is-selected'); 
        picker(cleric);
    }
});

valkyrie.addEventListener('click', () => {
    if (!lastPick){
        valkyrie.classList.add('is-selected'); 
        picker(valkyrie);
    } else {
        lastPick.classList.remove('is-selected');
        valkyrie.classList.add('is-selected'); 
        picker(valkyrie);
    }
});

// window.onload = function() {
//     characterSelection.classList.remove(`visibility`);
// }

charPick.addEventListener('click', () => {console.log('hi')});

function picker(playerClass){
    lastPick = playerClass;
}
