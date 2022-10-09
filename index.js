const dino = {}
const cactus1 = {}

dino.left = window.scrollX+document.querySelector('#dino').getBoundingClientRect().left;
dino.right = window.scrollX+document.querySelector('#dino').getBoundingClientRect().right;
dino.top = 0;
dino.bottom = 0;

cactus1.top = window.scrollY+document.querySelector('#cactus1').getBoundingClientRect().top;
cactus1.bottom = window.scrollY+document.querySelector('#cactus1').getBoundingClientRect().bottom;
cactus1.left = 0;
cactus1.right = 0;


var myInterval = setInterval(detectCollision, 200)
document.addEventListener('keypress', (event)=>{
    if(event.key===" ") start()
})


function jump(){
    document.getElementById("dino").className="jump"
    setTimeout(()=>{
        document.getElementById("dino").className=""},2000);
}

function move(){
    document.getElementById("cactus1").className="moveleft"
}

function detectCollision(){
    dino.top = window.scrollY+document.querySelector('#dino').getBoundingClientRect().top;
    dino.bottom = window.scrollY+document.querySelector('#dino').getBoundingClientRect().bottom;
    cactus1.left = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().left;
    cactus1.right = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().right;
    
    if (verticalCollision()&&horizontalCollision()) gameover();
}

function verticalCollision(){
    return dino.bottom>=cactus1.top&&dino.bottom<=cactus1.bottom?true:false;
}

function horizontalCollision(){

    return ((dino.right>=cactus1.left&& dino.right<=cactus1.right)||(dino.left>=cactus1.left&& dino.left<=cactus1.right)||(dino.right>=cactus1.right&&dino.left<=cactus1.left))? true:false;
}

function gameover() {
    clearInterval(myInterval);
    document.getElementById('cactus1').className="";
    document.getElementById('gameovertext').className="";
}

function start(){
    myInterval = setInterval(detectCollision, 200);
    jump();
    if (document.getElementById('cactus1').className==="moveleft"){}
    else move();
    document.getElementById('gameovertext').className="hidden"

}

