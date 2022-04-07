const dogBtn=document.getElementById("dogBtn")
const title=document.getElementById("title")
const titlePage=document.getElementById("titlePage")
const heroPage=document.getElementById("heroPage")
const walkies=document.getElementById("walkiesBtn")
const feedBtn=document.getElementById("feedBtn")
const waterBtn=document.getElementById("waterBtn")
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
            petStatus.textContent = `${this._name} has had enough food,water or fun ` ;
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





dogBtn.addEventListener("click",() => {
    petName=prompt("What would you like to name your dog?")
    titlePage.style.display="none"
    heroPage.style.display="block"
    walkies.style.display="block"
    newPet=new dog(petName)
    setInterval(function(){newPet.time()},300000)
    return newPet
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






