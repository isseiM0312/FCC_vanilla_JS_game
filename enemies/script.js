/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numverOfEnemys = 20;
const enemiesArray = [];

let gameFrame = 0;

const enemyImage = new Image();
enemyImage.src = "enemy1.png";

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width-this.width);
        this.y = Math.random() * (canvas.height-this.height);
        this.newX = Math.random() * (canvas.width-this.width);
        this.newY = Math.random() * (canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        //this.curve = Math.random() * 200 + 50;
    }
    update(){
        if (gameFrame % 30 === 0) {
            this.newX = Math.random() * (canvas.width-this.width);
            this.newY = Math.random() * (canvas.height-this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx;
        this.y -= dy;

        this.angle += this.angleSpeed;
        if (gameFrame %this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame ++;
        }

    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y,this.width,this.height);
    }
};

/* class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width-this.width);
        this.y = Math.random() * (canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 1.5 + 0.5;
        //this.curve = Math.random() * 200 + 50;
    }
    update(){
        this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/200) + (canvas.width/2 - this.width/2);
        this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/300) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if (gameFrame %this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame ++;
        }

    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y,this.width,this.height);
    }
};
 */
/* class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = Math.random() * (canvas.width-this.width);
        this.y = Math.random() * (canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }
    update(){
        this.x-= this.speed;
        this.y += this.curve* Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (gameFrame %this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame ++;
        }

    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y,this.width,this.height);
    }
};
 */
/* class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy1.png';
        this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width-this.width);
        this.y = Math.random() * (canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x+= Math.random() *5 -2.5;
        this.y+= Math.random() *5 -2.5;
        if (gameFrame %this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame ++;
        }

    }
    draw(){
        ctx.drawImage(enemyImage,this.frame * this.spriteWidth,0, this.spriteWidth, this.spriteHeight, this.x,this.y,this.width,this.height);
    }
}; */

for (let i = 0; i < numverOfEnemys; i++) {
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();