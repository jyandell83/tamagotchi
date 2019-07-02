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

//game object
const game = {
    timer: 0,
    startGame()  {
        console.log('start game');
    },
    startTimer()  {
        //begin the timer
        //age tamagotchi and starts incrementing the other stuff
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

buttonConsole.addEventListener('click', function(e)  {
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
})



const tama = new Tamagotchi('buddyboy');

console.log(tama);
