const dino_left = window.scrollX+document.querySelector('#dino').getBoundingClientRect().left;
const dino_right = window.scrollX+document.querySelector('#dino').getBoundingClientRect().right;

var dino_top = 0;
var dino_bottom = 0;

const cactus1_top = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().top;
const cactus1_bottom = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().bottom;

// console.log('dino_left', dino_left)
// console.log('dino_right', dino_right)
// console.log('cac_top', cactus1_top)
// console.log('cac_bottom', cactus1_bottom)

function jump(){
    document.getElementById("dino").className="jump"
    setTimeout(()=>{
        document.getElementById("dino").className=""},2000);
}

function detectCollision(){
    dino_top = window.scrollX+document.querySelector('#dino').getBoundingClientRect().top;
    dino_bottom = window.scrollX+document.querySelector('#dino').getBoundingClientRect().bottom;
    cactus1_left = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().left;
    cactus1_right = window.scrollX+document.querySelector('#cactus1').getBoundingClientRect().right;
    // console.log('dino_top', dino_top)
    // console.log('dino_bottom', dino_bottom)    
    // console.log('dino_top', dino_top)
    // console.log('dino_bottom', dino_bottom)

    if ((dino_bottom<=cactus1_top&&dino_bottom>=cactus1_bottom )||(cactus1_top<=dino_top&&cactus1_bottom>=dino_bottom)|| (dino_right>=cactus1_left&& dino_right<=cactus1_right)||(dino_left>=cactus1_left&& dino_left<=cactus1_right)||(cactus1_right<=dino_right&&cactus1_left>=dino_left)){
        window.alert('dead')
    }
    
}
setInterval("detectCollision()", 500)