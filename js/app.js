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
const buttonConsole = document.querySelector('#btn-container');
const startButton = document.querySelector('#start');
const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');
const pauseButton = document.querySelector('#pause');
const stats = document.querySelector('#stats');
const lair = document.querySelector('#tama-lair');

//game object
const game = {
    paused: false,
    timer: 0,
    tamaArray: [],
    currentImg: "https://i.imgur.com/5gPZZ2z.png?1",
    startGame()  {
        console.log('start game');
        const tama = new Tamagotchi('buddyboy');
        game.tamaArray.push(tama);
        this.startTimer();
        this.updateStats();
        this.updateImg();
    },
    startTimer()  {
        this.paused = false;
        const timer = setInterval(() => {
        this.timer ++;
        if (this.timer % 10 == 0)  {
            this.tamaArray[0].age++;
        }
        if (this.timer === 30) {
            this.currentImg = "https://i.imgur.com/CNZisda.png?1";
            this.updateImg();
        }
        if (this.timer % 15 == 0)  {
            this.tamaArray[0].hunger ++;
            this.tamaArray[0].sleepy ++;
            this.tamaArray[0].boredom ++;
        }
        if (this.paused == true)  {
            clearInterval(timer);
        }
        this.updateStats();
        }, 1000);
        //age tamagotchi and starts incrementing the other stuff
    },
    pauseTimer()  {
        this.paused = true;
        console.log('pause');
        console.log(this);
    },
    updateStats()  {
        stats.innerText = `Timer: ${game.timer} Age: ${this.tamaArray[0].age} Hunger: ${this.tamaArray[0].hunger} Sleepy: ${this.tamaArray[0].sleepy} Boredom: ${this.tamaArray[0].boredom}`;
    },
    updateImg()  {
        const img = document.createElement('img');
        img.setAttribute('src', this.currentImg);
        while (lair.firstChild) {
            lair.removeChild(lair.firstChild);
        }
        lair.appendChild(img);
    },
    killTama()  {
        //check for conditions that kill tamagotchi
    },
    feedTama()  {
        console.log('Give Tama some food');
        this.tamaArray[0].hunger --;
    },
    playWithTama()  {
        console.log('Play with Tama');
        this.tamaArray[0].boredom --;
    },
    putTamaToBed()  {
        console.log('Time for bed');
        this.tamaArray[0].sleepy --;
    }

}

//adding event listener to buttonConsole

buttonConsole.addEventListener('click', e =>  {
    if (e.target === startButton)  {
        game.startGame();
    }
    else if (e.target === pauseButton)  {
        game.pauseTimer();
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
