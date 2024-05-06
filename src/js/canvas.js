import platform from "../img/platform.png";
import hills from "../img/hills.png";
import background from "../img/background.png";
import platformSmallTall from "../img/platformSmallTall.png";
import spriteRunLeft from "../img/spriteRunLeft.png";
import spriteRunRight from "../img/spriteRunRight.png";
import spriteStandLeft from "../img/spriteStandLeft.png";
import spriteStandRight from "../img/spriteStandRight.png";


const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = .5;

class Player {
    constructor() {
        this.speed = 10;
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 1 };
        this.width = 66;
        this.height = 150;
        this.image = createImage(spriteStandRight);
        this.frames = 0;
        this.even = true;
        this.sprites = {
            stand: {
                left: createImage(spriteStandLeft),
                right: createImage(spriteStandRight),
                cropWidth: 177,
                width: 66
            },
            run: {
                left: createImage(spriteRunLeft),
                right: createImage(spriteRunRight),
                cropWidth: 341,
                width : 127.875
            }
        }
        this.currentSprite = this.sprites.stand.right;
        this.currentSpriteWidth = this.sprites.stand.cropWidth;
    }

    draw() {
        c.drawImage(this.currentSprite,
            this.currentSpriteWidth * this.frames, 0, this.currentSpriteWidth, 400,
            this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        if(this.even)this.frames++;
        this.even = !this.even;
        if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
            this.frames = 0;
        }
        else if(this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)){
            this.frames = 0;
        }
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }

    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = { x, y };
        this.width = image.width;
        this.height = image.height;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        // tilt only this platform
        // c.save();
        // c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
        // c.rotate(-0.5);
        // c.drawImage(this.image,0, -this.height / 2, this.width, this.height);
        // c.restore();

    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = { x, y };
        this.width = image.width;
        this.height = image.height;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);

    }
}

function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

let player = new Player();

let platforms = [
];

let genericObjects = [];

let scrollOffset = 0;
let scrollOffsetY = 0;



function init() {
    player = new Player();
    platforms = [
        new Platform({ x: platformImage.width * 5 + 450 - platformSmallTallImage.width, y: 270, image: platformSmallTallImage }),
        new Platform({ x: platformImage.width * 9 + 450 - platformSmallTallImage.width, y: 270, image: platformSmallTallImage }),
        new Platform({ x: -1, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width - 3, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 2 + 250, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 3 + 450, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 4 + 450 - 2, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 5 + 850 - 2, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 6 + 250, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 7 + 450, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 8 + 450 - 2, y: 470, image: platformImage }),
        new Platform({ x: platformImage.width * 9 + 850 - 2, y: 470, image: platformImage }),
    ];
    genericObjects = [new GenericObject({ x: -1, y: -1, image: createImage(background) }), new GenericObject({ x: -1, y: -1, image: createImage(hills) })];
    scrollOffset = 0;
    scrollOffsetY = 0;
}

const keys = {
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    console.log(player.position.y)

    genericObjects.forEach(object => {
        object.draw();
    });

    player.update();
    platforms.forEach(platform => {
        platform.draw();
    });
    player.update();
    if ((keys.ArrowLeft.pressed && player.position.x > 100) || (keys.ArrowLeft.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed;
    }
    else if (keys.ArrowRight.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    }
    else if(keys.ArrowUp.pressed && player.position.y > 100){
        player.velocity.y = -15;
    }
    else {
        player.velocity.x = 0;

        if (keys.ArrowRight.pressed) {
            scrollOffset += player.speed;
            platforms.forEach(platform => {
                platform.position.x -= player.speed;
            });
            genericObjects.forEach(object => {
                object.position.x -= player.speed * 0.66;
            });
        }
        if (keys.ArrowLeft.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed;
            platforms.forEach(platform => {
                platform.position.x += player.speed;
            });
            genericObjects.forEach(object => {
                object.position.x += player.speed * 0.66;
            });
        }
    }
    platforms.forEach(platform => {
        if (player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height) {
            player.velocity.y = 0;
            player.position.y = platform.position.y - player.height;
        }
    });

    if (scrollOffset > (platformImage.width * 9 + 650 - 2)){
        //show modal
        document.getElementById("youWonModel").style.display = "block";
        setTimeout(() => {
            document.getElementById("youWonModel").style.display = "none";
            init();
        }
        , 3000);
        
    }
    if (player.position.y > canvas.height) {
        init();
    }
}

init();
animate();

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if(parseInt(document.getElementById("jumps").innerText)>0){
                player.velocity.y = -15;
                document.getElementById("jumps").innerText = parseInt(document.getElementById("jumps").innerText)-1;
            }
            break;
        case 'ArrowDown':
            player.velocity.y = 15;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            player.currentSprite = player.sprites.run.left;
            player.currentSpriteWidth = player.sprites.run.cropWidth;
            player.width = player.sprites.run.width;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            player.currentSprite = player.sprites.run.right;
            player.currentSpriteWidth = player.sprites.run.cropWidth;
            player.width = player.sprites.run.width;
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            player.velocity.y = 0;
            break;
        case 'ArrowDown':
            player.velocity.y = 0;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            player.currentSprite = player.sprites.stand.left;
            player.currentSpriteWidth = player.sprites.stand.cropWidth;
            player.width = player.sprites.stand.width;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            player.currentSprite = player.sprites.stand.right;
            player.currentSpriteWidth = player.sprites.stand.cropWidth;
            player.width = player.sprites.stand.width;
            break;
    }
});

const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the tallest mammal?",
      options: ["Giraffe", "Elephant", "Horse", "Whale"],
      correctAnswer: "Giraffe"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "CH4"],
      correctAnswer: "H2O"
    }
  ];
  
  document.getElementById("openModalBtn").addEventListener("click", function() {
    // Display modal
    document.getElementById("quizModal").style.display = "block";
    // Get random question
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    // Set question text
    document.getElementById("question").innerText = randomQuestion.question;
    // Set options
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear previous options
    randomQuestion.options.forEach((option, index) => {
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = "option";
      optionInput.id = "option" + (index + 1);
      const optionLabel = document.createElement("label");
      optionLabel.htmlFor = "option" + (index + 1);
      optionLabel.innerText = option;
      optionsDiv.appendChild(optionInput);
      optionsDiv.appendChild(optionLabel);
      optionsDiv.appendChild(document.createElement("br"));
    });
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("quizModal").style.display = "none";
  });
  
  document.getElementById("checkAnswerBtn").addEventListener("click", function() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      let answer = selectedOption.id;
      const randomQuestion = questions.find(q => q.question === document.getElementById("question").innerText);
      if (answer === "option" + (randomQuestion.options.indexOf(randomQuestion.correctAnswer) + 1)) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("jumps").innerText = parseInt(document.getElementById("jumps").innerText)+2;
        setTimeout(() => {
            document.getElementById("quizModal").style.display = "none";
            document.getElementById("result").innerText = "";
        }
        , 1000);
        
      } else {
        document.getElementById("result").innerText = "Incorrect!";
        setTimeout(() => {
            document.getElementById("quizModal").style.display = "none";
            document.getElementById("result").innerText = "";
        }
        , 1000);
      }
    } else {
      document.getElementById("result").innerText = "Please select an option.";
    }
  });

