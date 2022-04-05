const dogBtn=document.getElementById("dogBtn")
const title=document.getElementById("title")

    const statcap=()=>{
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
class animal{
    constructor(name){
        this._name=name
        this.hunger=50
        this.thirst=50
        this.stress=50
    }

    feed(){
        this.hunger-=20
        this.statcap()
    }
    water(){
        this.thirst-=20
        this.statcap()
    }
    time(){
        if(this.stress<80){
        this.hunger+=10
        this.thirst+=15
        this.stress+=20
        statcap()
    }else{
        this.hunger+=20
        this.thirst+=30
        this.stress+=20
        statcap()
    }
    }
}
class dog extends animal{
    constructor(name){
        super(name)
    }
    walkies(){
        this.stress-=30
        this.thirst+=10
    }
}





dogBtn.addEventListener("click",() => {
    petName=prompt("What would you like to name your dog?")
    const newPet=new dog(petName)
    console.log(newPet)
    setInterval(newPet.time(),1000)
})