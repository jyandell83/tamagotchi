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
//variables to work with
const buttonConsole = document.querySelector('#btnContainer');
const startButton = document.querySelector('#start');
const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');
const stats = document.querySelector('#stats');

//game object
const game = {
    timer: 0,
    tamaArray: [],
    startGame()  {
        console.log('start game');
        const tama = new Tamagotchi('buddyboy');
        game.tamaArray.push(tama);
        this.startTimer();
        this.updateStats();
    },
    startTimer()  {
        const timer = setInterval(() => {
        this.timer ++;
        if (this.timer % 10 == 0)  {
            this.tamaArray[0].age++;
        }
        this.updateStats();
        }, 1000);
        //age tamagotchi and starts incrementing the other stuff
    },
    updateStats()  {
        stats.innerText = `Timer: ${game.timer} Age: ${this.tamaArray[0].age} Hunger: ${this.tamaArray[0].hunger} Sleepy: ${this.tamaArray[0].sleepy} Boredom: ${this.tamaArray[0].boredom}`;
    },
    killTama()  {
        //check for conditions that kill tamagotchi
    },
    feedTama()  {
        console.log('Give Tama some food');
    },
    playWithTama()  {
        console.log('Play with Tama');
    },
    putTamaToBed()  {
        console.log('Time for bed');
    }

}

//adding event listener to buttonConsole

buttonConsole.addEventListener('click', e =>  {
    if (e.target === startButton)  {
        game.startGame();
    }
    else if (e.target === feedButton)  {
        game.feedTama();
    }
    else if (e.target === playButton)  {
        game.playWithTama();
    }
    else if (e.target === sleepButton)  {
        game.putTamaToBed();
    }
    else {}
})
