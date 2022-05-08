class DataNPC {
    genderArr = ['male', 'female', 'non-binary']
    skillsArr = ['Athletics','Blast','Deception','Empathy','Fighting','Investigation','Lore','Mechanics','Notice','Persuasion','Resources','Transport','Vigor','Will']
    speciesArr = ['Rodian', 'Human', 'Wookie', 'Tuskan Raider']
    troubleArr = ['Hunted', 'Broke', 'Diseased', 'Lost', 'Haunted', 'Crippled', 'Shamed', 'Outcasted', 'Under Supplied', 'Shamed' ]
    conceptArr = ['Politician', 'Mercenary', 'Soldier', 'Criminal', 'Mechanic', 'Pilot', 'Smuggler', 'Labourer', 'Trader', 'Fixer', 'Gambler', 'Force Adept']
    constanentStr = 'bcdfghjklmnpqrstvwxyz'
    vowelStr ='aeiou'
    //This is the base method for retrieving a random value from an array
    randomArrValue(arr){
        let randomIndex = Math.floor(Math.random() * (arr.length -1))
        return arr[randomIndex]
    }
    //Random age generator
    age(){
        return Math.floor(12 + Math.random() * 100)
    }
    //skill list generator
    skillList(n1){
        let arr = []
        let prod = [] 
        for(let i = 0; i < n1; i++ ){
           arr.push(this.randomArrValue(this.skillsArr))
        } 
        arr.sort()
        let count = 1
        arr.forEach(function (el, i, a) {
                let previousValue = a[i-1]
                if (el === previousValue) {
                    count = count + 1
                    previousValue = `${el} ${count}`
                } else {
                    prod.push(`${el} ${count}`)
                    count = 1
                }
            })
        return prod
    }
    //name generator
    name(){
        let name = ''
        let count = Math.floor(1 + Math.random() * 3)
        for(let i = 0; i < count; i++){
            name = name + this.randomArrValue(this.constanentStr) + this.randomArrValue(this.vowelStr)
        }
        return name
    }
}
//this creates the data packet. DO NOT TOUCH. everything is in class dataNPC
// const data = new dataNPC
//NPC requires name, species, gender, high concept, trouble, skills

class NPC extends DataNPC {
    
    constructor(){
        super()
        this._name = super.name()
        this._species = super.randomArrValue(this.speciesArr)
        this._age = super.age()
        this._gender = super.randomArrValue(this.genderArr)
        this._concept = super.randomArrValue(this.conceptArr)
        this._trouble = super.randomArrValue(this.troubleArr)
        this._skills = super.skillList(20)
    }

    get name() {
        return this._name
    }
    get species() {
        return this._species
    }
    get age() {
        return this._age
    }
    get gender() {
        return this._gender
    }
    get concept() {
        return this._concept
    }
    get trouble() {
        return this._trouble
    }
    get skills() {
        return this._skills
    }
}

//Event Listener and generator
class Generator {
    constructor(){
        this._btnNPC = document.getElementById('btnNPC')
        this._nameNPC = document.getElementById('nameNPC')
        this._speciesNPC = document.getElementById('speciesNPC')
        this._ageNPC = document.getElementById('ageNPC')
        this._genderNPC = document.getElementById('genderNPC')
        this._conceptNPC = document.getElementById('conceptNPC')
        this._troubleNPC = document.getElementById('troubleNPC')
        this._skillsNPC = document.getElementById('skillsNPC')
    }

    get btnNPC(){
        return this._btnNPC
    }

    get nameNPC(){
        return this._nameNPC
    }
    get speciesNPC(){
        return this._speciesNPC
    }
    get ageNPC(){
        return this._ageNPC
    }
    get genderNPC(){
        return this.genderNPC
    }
    get conceptNPC(){
        return this._conceptNPC
    }
    get troubleNPC(){
        return this._troubleNPC
    }
    get skillsNPC(){
        return this._skillsNPC
    }

    btnNPCListener(){
        this.btnNPC.addEventListener('click', this.populateCardNPC)    
    }

    populateCardNPC(){
        const npc = new NPC()
        nameNPC.innerHTML = `Name: ${npc.name}`
        speciesNPC.innerHTML = `Species: ${npc.species}`
        ageNPC.innerHTML = `Age: ${npc.age}`
        genderNPC.innerHTML = `Gender: ${npc.gender}`
        conceptNPC.innerHTML = `Concept: ${npc.concept}`
        troubleNPC.innerHTML = `Trouble: ${npc.trouble}`
        skillsNPC.innerHTML = `Skills: ${npc.skills}`
        console.log(npc)
    }
}
//test generator
let generation = new Generator()
generation.btnNPCListener()
//This is a test NPC
