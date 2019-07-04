console.log('working');

class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 10;
        this.sleepy = 10;
        this.boredom = 10;
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
        this.makeStats();
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
        if (this.timer === 15)  {

            document.querySelector('.yoshi').setAttribute('class', 'shake');
        }
        if (this.timer === 30) {
            this.currentImg = "https://i.imgur.com/CNZisda.png?1";
            this.updateImg();
        }
        if (this.timer % 15 == 0)  {
            this.tamaArray[0].hunger --;
            this.tamaArray[0].sleepy --;
            this.tamaArray[0].boredom --;
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
    makeStats()  {
        const ageDiv = document.createElement('div');
        ageDiv.setAttribute('id', 'age-stat');
        const hungerDiv = document.createElement('div');
        hungerDiv.setAttribute('id', 'hunger-stat');
        const sleepyDiv = document.createElement('div');
        sleepyDiv.setAttribute('id', 'sleep-stat');
        const boredDiv = document.createElement('div');
        boredDiv.setAttribute('id', 'bored-stat');
        stats.append(ageDiv);
        stats.append(hungerDiv);
        stats.append(sleepyDiv);
        stats.append(boredDiv);

    },
    //this isnt working right now, trying to make hearts for the life
    makeHearts(num)  {
        const heartsArray = [];
        const span = document.createElement('span');
        for (let i = 1; i <= num; i++)  {
            heartsArray.push('&#x2665;');
        }
        const hearts = heartsArray.join();
        console.log(hearts);
    },
    updateStats()  {
        document.querySelector('#age-stat').innerText = `Age: ${this.tamaArray[0].age}`;
        document.querySelector('#hunger-stat').innerText = `Hunger: ${this.tamaArray[0].hunger}`;
        document.querySelector('#sleep-stat').innerText = `Sleepy: ${this.tamaArray[0].sleepy}`;
        document.querySelector('#bored-stat').innerText = `Boredom: ${this.tamaArray[0].boredom}`;
        },
    updateImg()  {
        const img = document.createElement('img');
        img.setAttribute('src', this.currentImg);
        img.setAttribute('class', 'yoshi');
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
