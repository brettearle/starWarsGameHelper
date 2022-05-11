//this is global data storage for fetch


//this is the fetch class from wikipedia
class FetchData {
    getSpecies(){
        function getSpeciesAtoE(){
            const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Star_Wars_species_%28A%E2%80%93E%29&prop=disabletoc&format=json&prop=displaytitle&prop=sections&origin=*'
            return fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                let store = data.parse.sections
                let arr =[]
                store.forEach(el => arr.push(el.line))
                arr = arr[Math.floor(Math.random() * (arr.length -3))] 
                speciesNPC.innerHTML = `Species: ${arr}`
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        }
        function getSpeciesFtoJ(){
            const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Star_Wars_species_(F–J)&prop=disabletoc&format=json&prop=displaytitle&prop=sections&origin=*'
            return fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                let store = data.parse.sections
                let arr =[]
                store.forEach(el => arr.push(el.line))
                arr = arr[Math.floor(Math.random() * (arr.length -4))] 
                speciesNPC.innerHTML = `Species: ${arr}`
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        }
        function getSpeciesKtoO(){
            const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Star_Wars_species_(K–O)&prop=disabletoc&format=json&prop=displaytitle&prop=sections&origin=*'
            return fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                let store = data.parse.sections
                let arr =[]
                store.forEach(el => arr.push(el.line))
                arr = arr[Math.floor(Math.random() * (arr.length -5))] 
                speciesNPC.innerHTML = `Species: ${arr}`
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        }
        function getSpeciesPtoT(){
            const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Star_Wars_species_(P–T)&prop=disabletoc&format=json&prop=displaytitle&prop=sections&origin=*'
            return fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                let store = data.parse.sections
                let arr =[]
                store.forEach(el => arr.push(el.line))
                arr = arr[Math.floor(Math.random() * (arr.length -5))] 
                speciesNPC.innerHTML = `Species: ${arr}`
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        }
        function getSpeciesUtoZ(){
            const url = 'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Star_Wars_species_(U–Z)&prop=disabletoc&format=json&prop=displaytitle&prop=sections&origin=*'
            return fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                let store = data.parse.sections
                let arr =[]
                store.forEach(el => arr.push(el.line))
                arr = arr[Math.floor(Math.random() * (arr.length -3))] 
                speciesNPC.innerHTML = `Species: ${arr}`
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        }
        //this executes a call to 1 of 5 pages of species list on wikipedia
        const getSpeciesArrayOfFunctions = [getSpeciesAtoE,getSpeciesFtoJ,getSpeciesKtoO,getSpeciesPtoT,getSpeciesUtoZ]
        function randomNumberForSpeciesFetch(n){
            return Math.floor(Math.random() * n)
        }
        getSpeciesArrayOfFunctions[randomNumberForSpeciesFetch(getSpeciesArrayOfFunctions.length)]()
        // getSpeciesAtoE()
        // getSpeciesFtoJ()
        // getSpeciesKtoO()
        // getSpeciesPtoT()
        // getSpeciesUtoZ()
    }
}

//This is where data is stored to populate NPC card. uses the fetch data class for species
class DataNPC extends FetchData{
    constructor(){
        super()
        this.speciesArr = super.getSpecies()
    }
    genderArr = ['male', 'female', 'unknown']
    skillsArr = ['Athletics','Blast','Deception','Empathy','Fighting','Investigation','Lore','Mechanics','Notice','Persuasion','Resources','Transport','Vigor','Will']
    troubleArr = ['Hunted', 'Broke', 'Diseased', 'Lost', 'Haunted', 'Crippled', 'Shamed', 'Outcasted', 'Under Supplied', 'Shamed' ]
    conceptArr = ['Politician', 'Mercenary', 'Soldier', 'Criminal', 'Mechanic', 'Pilot', 'Smuggler', 'Labourer', 'Trader', 'Fixer', 'Gambler', 'Force Adept']
    constanentStr = 'bcdfghjklmnpqrstvwxyz'
    vowelStr ='aeiou'

    //This is the base method for retrieving a random value from an array
    randomArrValue(arr){
        let randomIndex = Math.floor(Math.random() * (arr.length))
        return arr[randomIndex]
    }
    //Random age generator
    age(){
        return Math.floor(16 + Math.random() * 44)
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
        let count = Math.floor(2 + Math.random() * 3)
        for(let i = 0; i < count; i++){
            name = name + this.randomArrValue(this.constanentStr) + this.randomArrValue(this.vowelStr)
        }
        return name
    }
}

//NPC requires name, species, gender, high concept, trouble, skills

class NPC extends DataNPC {
    
    constructor(){
        super()
        this._name = super.name()
        this._species = this.speciesArr
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
        // console.log(npc) //use this console log to see the object that is the generated result
    }
}
//builds generator and listens to generate button
let generation = new Generator()
generation.btnNPCListener()
