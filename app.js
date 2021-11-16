import { monsterArray } from "./monsters.js"
import { populator } from "./populateGmMonsters.js"

const gmAddBtn = document.getElementById('attack')


const apiUrl = 'https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json'

let fullMonsterArr = await monsterArray(apiUrl)

gmAddBtn.addEventListener('click', () => {
    populator(fullMonsterArr)
})
