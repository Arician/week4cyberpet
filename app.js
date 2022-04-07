const dogBtn=document.getElementById("dogBtn")
const catBtn=document.getElementById("catBtn")
const birdBtn=document.getElementById("birdBtn")
const title=document.getElementById("title")
const titlePage=document.getElementById("titlePage")
const heroPage=document.getElementById("heroPage")
const walkiesBtn=document.getElementById("walkiesBtn")
const feedBtn=document.getElementById("feedBtn")
const waterBtn=document.getElementById("waterBtn")
const playBtn=document.getElementById("playBtn")
const cageBtn=document.getElementById("cageBtn")
const petStatus=document.getElementById("petStatus")




class animal{
    constructor(name){
        this._name=name
        this.hunger=50
        this.thirst=50
        this.stress=0
    }
    statcap(){
        if(this.hunger<0){
            this.hunger=0
        }
        if(this.hunger>100){
            this.hunger=100
        }
        if(this.thirst<0){
            this.thirst=0
        }
        if(this.thirst>100){
            this.thirst=100
        }
        if(this.stress<0){
            this.stress=0
        }
        if(this.stress>100){
            this.stress=100
        }}
    feed(){
        this.hunger-=20
        this.statcap()
        if (this.hunger >= 50) {
            petStatus.textContent = `${this._name} needs feeding. Be careful he might bolt his food`;
        } else if(this.hunger >= 30 ) { 
        petStatus.textContent = `${this._name} needs more food`;
        } else{
        petStatus.textContent = `${this._name} has had enough food ` ;
        }
    }
    water(){
        this.thirst-=20
        this.statcap()  
        if (this.thirst >= 50) {
            petStatus.textContent = `${this._name} needs water`;
        } else if(this.thirst >= 30 ) {
            petStatus.textContent = `${this._name} needs more water`;
        } else {     
            petStatus.textContent = `${this._name} has had enough water ` ;
        }
    }
    time(){
        if(this.stress<80){
        this.hunger+=10
        this.thirst+=15
        this.stress+=20
        console.log("test2")
        this.statcap() 
        if (this.stress >= 50) {
            petStatus.textContent = `${this._name} needs food, water or fun`;
        } else if(this.stress >= 30 ) {
            petStatus.textContent = `${this._name} needs more food, water or fun`;
        } else {
            petStatus.textContent = `${this._name} has had enough food, water or fun` ;
        }
        return this.hunger, this.thirst, this.stress
        }else{
        this.hunger+=20
        this.thirst+=30
        this.stress+=20
        console.log("test")
        this.statcap() 
        if (this.hunger >= 50 || this.thirst >= 50 || this.stress >= 50) {
            petStatus.textContent = `${this._name} needs more food, more water and exercise`
        } else if(this.hunger >= 30 || this.thirst >= 30 || this.stress >= 30) {
            petStatus.textContent = `${this._name} needs more food, more water and exercise`
        } else {
            petStatus.textContent = `${this._name}has had enough food, enough water and enough exercise `
        }
        return this.hunger, this.thirst, this.stress
    }
    }
    }
class dog extends animal{
    constructor(name){
        super(name)
        this.species="dog"
    }
    walkies(){
        this.stress-=30
        this.thirst+=10
        this.statcap() 
       if (this.stress >= 50 || this.thirst >= 50) {
            petStatus.textContent = `${this._name} needs more exercise and/or a drink`;
        }else if(this.stress >= 30 || this.thirst >= 30 ) {
             petStatus.textContent = `${this._name} needs more exercise and/or a drink`;
        }else{
             petStatus.textContent = `${this._name} has had enough exercise and water ` ;
        }
    }
}
class cat extends animal{
    constructor(name){
        super(name)
        this.species="cat"
    }
    play(){
        this.stress-=30
        this.thirst+=10
        this.statcap() 
       if (this.stress >= 50 || this.thirst >= 50) {
            petStatus.textContent = `${this._name} needs more exercise and/or a drink`;
        }else if(this.stress >= 30 || this.thirst >= 30 ) {
             petStatus.textContent = `${this._name} needs more exercise and/or a drink`;
        }else{
             petStatus.textContent = `${this._name} has had enough exercise and water ` ;
        }
    }
}
class bird extends animal{
    constructor(name){
        super(name)
        this.species="bird"
        this.cage="in"
    }
    cageToggle(){
        if(this.cage=="in"){
            this.cage="out"
            cageBtn.textContent="Return to cage"
        }else{
            this.cage="in"
            cageBtn.textContent="Release from cage"
        }
    }
    time(){
        if(this.cage=="in"||this.stress<80){
            this.hunger+=5
            this.thirst+=10
            this.stress+=20
        }else if(this.cage=="in"){
            this.hunger+=20
            this.thirst+=30
            this.stress+=20
        }else{
            this.hunger+=10
            this.thirst+=15
            this.stress-=10
        }
    }
}



let createPet=(i)=>{
    petName=prompt(`What would you like to name your ${i}?`)//all of this into a funtion, using template literals and if statments to make it work for all three animals
    titlePage.style.display="none"
    heroPage.style.display="block"
    if (i=="dog"){
        newPet = new dog(petName)
        walkiesBtn.style.display="block"       
    } else if (i=="cat"){
        newPet = new cat(petName)
        playBtn.style.display="block"
    } else {
        newPet = new bird(petName)
        cageBtn.style.display="block"     
    }
    setInterval(function(){newPet.time()},300000)
    return newPet
}       
    



dogBtn.addEventListener("click",() => {
    createPet("dog")
})
catBtn.addEventListener("click",() => {
    createPet("cat")
})
birdBtn.addEventListener("click", () => {
    createPet("bird")
})
feedBtn.addEventListener("click",() => {
    newPet.feed()
})
waterBtn.addEventListener("click",() => {
    newPet.water()
})
walkiesBtn.addEventListener("click",() => {
    newPet.walkies()
})
playBtn.addEventListener("click",()=>{
    newPet.play()
})
cageBtn.addEventListener("click",() => {
    newPet.cageToggle()
})







