console.log('working');

class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 1;
        this.sleepy = 1;
        this.boredom = 1;
    }
}

const game = {
    timer: 0,
    startGame()  {
        //stuff to do when game starts
    },
    startTimer()  {
        //begin the timer
        //age tamagotchi and starts incrementing the other stuff
    },
    killTama()  {
        //check for conditions that kill tamagotchi
    },
    feedTama()  {
        //things to do when you feed Tama
    },
    playWithTama()  {
        //things to do when playing with Tama
    },
    putTamaToBed()  {

    }

}



const tama = new Tamagotchi('buddyboy');

console.log(tama);
