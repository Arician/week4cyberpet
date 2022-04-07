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
const btns=document.querySelectorAll("button")
const petImg=document.getElementById("petImg")

const remove=(i)=>{
    i.style.display="none"
}

class animal{
    constructor(name){
        this._name=name
        this.hunger=50
        this.thirst=50
        this.stress=0
    }
    gameover(){
        this.timeStatus()
        btns.forEach(remove)
        petImg.src="images/gameover.png"
    }
    timeStatus(){
        if (this.hunger==100&&this.thirst==100){
            petStatus.textContent=`${this._name} has run away to find a better home`
        } else if (this.hunger > 50) {
            petStatus.textContent = `${this._name} looks hungry`;
        } else if(this.thirst > 50 ) {
            petStatus.textContent = `${this._name} looks thirsty`;
        } else if(this.stress>50){
            petStatus.textContent=`${this._name} looks restless`;
        }else{
            petStatus.textContent = `${this._name} looks content` ;
        }
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
            petStatus.textContent = `${this._name} is wolfing their food down`;
        } else if(this.hunger >= 30 ) { 
        petStatus.textContent = `${this._name} is happily eating their food`;
        } else{
        petStatus.textContent = `${this._name} is picking at their food`;
        }
    }
    water(){
        this.thirst-=20
        this.statcap()  
        if (this.thirst >= 50) {
            petStatus.textContent = `${this._name} is greedily drinking water`;
        } else if(this.thirst >= 30 ) {
            petStatus.textContent = `${this._name} is happily drinking their water`;
        } else {     
            petStatus.textContent = `${this._name} is lazily drinking their water`;
        }
    }
    time(){
        if(this.hunger==100&&this.thirst==100){
            this.gameover()
        }else if(this.stress<80){
        this.timeStatus()    
        this.hunger+=10
        this.thirst+=15
        this.stress+=20
        this.statcap() 
        }else{
            this.timeStatus()    
            this.hunger+=20
            this.thirst+=30
            this.stress+=20
            this.statcap() 
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
       if (this.stress >= 50) {
            petStatus.textContent = `${this._name} has worked up a sweat but wants more fun`;
        }else if(this.stress >= 30) {
             petStatus.textContent = `${this._name} is starting to calm down`;
        }else{
             petStatus.textContent = `${this._name} is nice and calm`;
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
            petImg.src="images/bird.png"
        }else{
            this.cage="in"
            cageBtn.textContent="Release from cage"
            petImg.src="images/cage.png"
        }
    }
    time(){
        if(this.hunger==100&&this.thirst==100){
            this.gameover()
        }else if(this.cage=="in"&&this.stress<80){
            this.timeStatus()
            this.hunger+=5
            this.thirst+=10
            this.stress+=20
            this.statcap()
        }else if(this.cage=="in"){
            this.timeStatus()
            this.hunger+=20
            this.thirst+=30
            this.stress+=20
            this.statcap()
        }else{
            this.timeStatus()
            this.hunger+=10
            this.thirst+=15
            this.stress-=10
            this.statcap()
        }
    }
}



let createPet=(i)=>{
    petName=prompt(`What would you like to name your ${i}?`)//all of this into a funtion, using template literals and if statments to make it work for all three animals
    titlePage.style.display="none"
    heroPage.style.display="flex"
    if (i=="dog"){
        newPet = new dog(petName)
        walkiesBtn.style.display="block"
        petImg.src="images/dog.png"       
    } else if (i=="cat"){
        newPet = new cat(petName)
        playBtn.style.display="block"
        petImg.src="images/cat.png"
    } else {
        newPet = new bird(petName)
        cageBtn.style.display="block"
        petImg.src="images/cage.png"     
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







